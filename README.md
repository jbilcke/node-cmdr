# node-cmdr

*command line apps made easy*

## Overview

  Minimalist framework for command line apps. CoffeeScript demo:

``` coffeescript
  # myscript.coffee
  (require 'cmdr')
    push:
      origin: (target) -> console.log "uploading #{target}"
```

  If you build it to js, install it in a /bin somewhere, and run myscript:

```
  $ myscript push origin foo
  uploading foo
```

  As I said. Minimalist.

### Current status

  This library is still in development so expect heavy refactoring, broken master, and sparse documentation until I have more time to settle everything.

### Help

  Please open a github issue if something is broken - thanks!

### TODO / Wishlist

  * Use node-complete ?: https://github.com/hij1nx/complete
  * Use node-commander to parse args?

### Licensing

  BSD (see [LICENCE.txt](https://github.com/daizoru/node-cmdr/blob/master/LICENCE.txt) for details)

## Installation

### For users

#### Add to your project

    $ cd myproject
    $ npm install cmdr
 
  This will create a copy of node-cmdr an put it inside *myproject/node_modules/cmdr*

  Don't forget to open your package.json and add this to dependencies:

``` yaml
  "cmdr": "0.0.x"
```
   
#### Global install

    $ npm install cmdr -g

#### Run the tests

    No tests for the moment

### For contributors

  To install node-cmdr in a development setup:

    $ git clone http://github.com/daizoru/node-cmdr.git
    $ cd node-cmdr
    $ npm link

  To compile sources (located in /src, written in CoffeeScript) to /lib (in JavaScript):

    $ npm run-script build

## Documentation

### Examples

``` javascript
// use
var cmdr = require('cmdr');

// design
var api = {
  help: {
    pi: function () {
      console.log "don't use me"
    }
  },

  foo: function (name) {
    if (name !== undefined) {
      console.log("you need to provide a bar name");
      process.exit(1);
    } else {
      console.log("creating bar #{name}");
      process.exit(0);
    }
  },

  list: {
    things: function () {
      // replace by your custom join(), colors, cliff whatever code
      console.log("- this\n- and this\n- and this");
    }
  },

  pi: function () { 
    console.log( 3.1415);
  }
};

// profit
cmdr(api);

```

  Now you should be able to use your program in command-line, to call the functions:

```
  $ myprogram foo
  you need to provide a bar name

  $ myprogram foo bara
  creating bar bara

  $ myprogram help pi
  don't use me

  $ myprogram pi
  3.1415

  $ myprogram list things
  - this
  - and this
  - and this
```

  cmdr don't know if you want to emit warnings, errors or log messages,
  so you have to print everything yourself.


### Fancy CoffeeScript Demo

  You can find it in /examples

``` coffeescript
(require 'cmdr')

  help:
    pi: -> console.log "very important for a restaurant"

  order: (meal="") ->
    unless meal
      console.error "you need to order something"
      process.exit 1

    console.log "delivering #{meal}"

  list:
    meals: -> console.log "- chicken\n- cheese\n- potatoes"

  pi: -> console.log 3.1415
```
