'use strict';

var generators = require('yeoman-generator');
var path = require('path');
var fs = require('fs');
var inflect = require('i')();
var assign = require('object.assign').getPolyfill();
var transform = require('../../tools/generator/transform');
var updateMixin = require('../../tools/generator/updateMixin');

function importHook(filename, name, moduleName, type, methods) {
  // Lookup existing services/<service-name>/hooks/index.js file
  if (fs.existsSync(filename)) {
    var content = fs.readFileSync(filename).toString();
    var ast = transform.parse(content);

    transform.addImport(ast, name, moduleName);
    methods.forEach(function(method) {
      transform.addToArrayInObject(ast, 'exports.' + type, method, name + '()');
    });

    fs.writeFileSync(filename, transform.print(ast));
  }
}

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
    updateMixin.extend(this);
  },

  initializing: function (name) {
    var done = this.async();
    this.props = {
      name: name
    };
    this.mixins.notifyUpdate(done);
  },

  prompting: function () {
    var done = this.async();
    var prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What do you want to call your hook?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of hook do you need?',
        store: true,
        choices: [
          {
            name: 'before hook',
            value: 'before',
            checked: true
          },
          {
            name: 'after hook',
            value: 'after'
          }
        ]
      },
      {
        type: "list",
        name: "global",
        message: "What kind of hook do you want?",
        store: true,
        choices: [
          { name: "global", value: "global" },
          { name: "for a service", value: "service" }
        ]
      },
      {
        type: 'input',
        name: 'service',
        store: true,
        message: 'What service is this hook for?',
        when: function( p ){ return "service" === p.global }
      },
      {
        type: 'checkbox',
        name: 'method',
        store: true,
        message: 'What method is this hook for?',
        when: function( p ){ return "service" === p.global },
        choices: [
          {
            name: 'no specific method',
            value: null
          },
          {
            name: 'all',
            value: 'all'
          },
          {
            name: 'find',
            value: 'find'
          },
          {
            name: 'get',
            value: 'get'
          },
          {
            name: 'create',
            value: 'create'
          },
          {
            name: 'update',
            value: 'update'
          },
          {
            name: 'patch',
            value: 'patch'
          },
          {
            name: 'remove',
            value: 'remove'
          }
        ]
      }
    ];

    this.prompt(prompts, function (props) {
      this.props = assign(this.props, props);

      done();
    }.bind(this));
  },

  writing: function () {
    var hookIndexPath = "";

    console.log( this.props )

    if( "global" === this.props.global ){

      hookIndexPath = path.join( "src", "hooks", "index.js" );
      this.props.hookPath = path.join('src', 'hooks', this.props.name + '.js');
      this.props.hookTestPath = path.join('test', 'hooks', this.props.name + '.test.js');

    } else {

      hookIndexPath = path.join('src', 'services', this.props.service, 'hooks', 'index.js');
      this.props.hookPath = path.join('src', 'services', this.props.service, 'hooks', this.props.name + '.js');
      this.props.hookTestPath = path.join('test', 'services', this.props.service, 'hooks', this.props.name + '.test.js');

    }

    // this.props.hookTestPath = path.join('test/services/', this.props.service, 'hooks/', this.props.name + '.test.js');
    this.props.codeName = inflect.camelize(inflect.underscore(this.props.name), false);

    // Automatically import the hook into services/<service-name>/hooks/index.js and initialize it.
    if( null != this.props.method ) importHook(hookIndexPath, this.props.codeName, './' + this.props.name, this.props.type, this.props.method);

    // copy the hook
    this.fs.copyTpl(
      this.templatePath('hook.js'),
      this.destinationPath(this.props.hookPath),
      this.props
    );

    // copy the hook test
    this.fs.copyTpl(
      this.templatePath('hook.test.js'),
      this.destinationPath(this.props.hookTestPath),
      this.props
    );
  }
});
