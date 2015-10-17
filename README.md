# node-env-injector

Specify an ENV configuration

## Install

```sh
$ npm install --save node-env-injector
```

## Usage

```js
var envInjector = require('node-env-injector');
var env = require('./topsecret.js');

envInjector.load(env);
```

## License

Apache-2.0 © [Jinyoung Kim](https://github.com/jkiimm)

