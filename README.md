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

# Tools and libraries used

[mocha](http://mochajs.com) - Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.

[chai](http://chaijs.com) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. -- Chai has several interfaces that allow the developer to choose the most comfortable. The chain-capable BDD styles provide an expressive language & readable style, while the TDD assert style provides a more classical feel.

[sinon](http://sinonjs.org/) - Standalone test spies, stubs and mocks for JavaScript. No dependencies, works with any unit testing framework.

[flow](http://flowtype.org) - (in combination with the appropriate babel transforms) Flow is a static type checker for JavaScript. It can be used to catch common bugs in JavaScript programs before they run.

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
