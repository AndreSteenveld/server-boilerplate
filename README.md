# Checkout and setup

```
	$ git clone <path to this repo>
	$ npm install
```

# Running the application

```
	$ npm start
```

# Running the tests

```
	$ npm test
```

# Debugging and profiling

Using `node-inspector` and `node-debug` yielded some positive results, your milage may vary when using `iron-node`.

# Local generators

Creating models, middleware and other components is tedious in every project and usually contains some project specific boilerplate code. To make the process of creating a common component as smooth as possible this project comes with local generators that can do the heavy lifting for you. These can be found in the `./generator/` directory. If you find yourself editing the generated code very often (adding decorators, making sure your model inherits from a common `Model` class, etc) the templates can easily be edited to fit your projects specific needs. It is worth noting that the generators are written in plain ES5.

The generators themselves are just bare bone yeoman generators and documentation on how to write them can be found on the yeoman website. There are two ways to use the generators in this project depending if yeoman is globally installed or not.

```
	# Yeoman globally installed, assuming you are in the root of the project
	$ yo ./generator/model

	# Yeoman not installed globally
	$ ./generate ./generator/model
```

# Tools and libraries used

[mocha](http://mochajs.com) - Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

[chai](http://chaijs.com) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. -- Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.

[sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript. No dependencies, works with any unit testing framework.

[flow](http://flowtype.org) - (in combination with the appropriate babel transforms) Flow is a static type checker for JavaScript. It can be used to catch common bugs in JavaScript programs before they run.

[yeoman](http://yeoman.io/) - A generator is basically a plugin that can be run with the `yo` command to scaffold complete projects or useful parts.

[feathersjs](http://feathersjs.com/) - With Feathers it's easy to create scalable real-time applications. This guide will tell you everything you need to know about creating web and mobile apps with Feathers.

The feathersjs generators have been used to create the local generators in this package. They have been stripped of all the database specifics and the templates have been updated to work with the other dependencies and they were converted to ES6/7 to take advantage of the babel setup in this project.

## Babel

[babel](http://babeljs.io) - Babel has support for the latest version of JavaScript through syntax transformers. These allow you to use new syntax, right now without waiting for browser support. Check out our ES2015 preset to get started.

With the following transforms and presets:
 * [Preset es2015](http://babeljs.io/docs/plugins/preset-es2015/)
 * [Call constructor](https://github.com/tc39/ecma262/blob/master/workingdocs/callconstructor.md)
 * [Class Fields & Static Properties](https://github.com/jeffmo/es-class-fields-and-static-properties)
 * [Javascript decorators](https://github.com/wycats/javascript-decorators)
 * Export extensions - Specification has been split over two smaller subspecs [1](https://github.com/leebyron/ecmascript-export-ns-from), [2](https://github.com/leebyron/ecmascript-export-default-from)
 * [Function bind](https://github.com/zenparsing/es-function-bind)
 * [Object rest spread](https://github.com/sebmarkbage/ecmascript-rest-spread)
