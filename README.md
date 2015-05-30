# node-cmdr

*simple command line api builder*

[![NPM](https://nodei.co/npm/cmdr.png?downloads=true&stars=true)](https://nodei.co/npm/cmdr/)


## Overview

CMDR is a simple library for command line APIs.

If you are not building a compiler and just need a small hammer, use CMDR.


## Why

Maybe you need to build a big bloated, every-parameters-are-inside-flags

    $ full --feature -d --command-line "app"

If that's the case, ok, use one of the many existing command-line libs on NPM.

But maybe you just want to put a simple command system in a few minutes, eg like

    $ simple cli app

If that's the case, give a try to CMDR.


## Example

Here is a quick demo. See the `examples/` dir for more.

```javascript
var cmdr = require("cmdr");

cmdr({

  "^say ([a-z]+) (\\d+) times?": function (msg, times) {
    // no parseInt but some JS black magic, do not try this at home
    for (var i = 0; i < times; i++) {
      console.log(msg)
    }
  }

})
```

Now you can call you command line API this way:

```
$ node examples/demo.js say apple 1 time
apple
```


``
$ node examples/demo.js say beetlejuice 3 times
beetlejuice
beetlejuice
beetlejuice
```

### Licensing

  BSD (see [LICENCE.txt](https://github.com/jbilcke/node-cmdr/blob/master/LICENCE.txt) for details)

```
