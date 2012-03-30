# node-cmdr

*A library to define command line interfaces*

## Licence

  New-Style BSD: you can use it for doing evil stuff, but I'm not responsible (see [LICENCE.txt](https://github.com/daizoru/node-cmdr/blob/master/LICENCE.txt) for details).
  
## How it work

  Looks, Ma!.. No doc!

## Installation

### Global install:

  This way:
  
``` bash
  npm install cmdr  -g
```

  You need to have [npm](http://npmjs.org) installed.

### Local project install:

  Open your package.json and add this to dependencies:

``` yaml
  "cmdr": "0.0.0"
```

  Bind to the system (may need sudo depending on your NPM config):
  
    $ npm link

## Development Instructions

  Install development dependencies (can take quite a time!):

    $ npm install --dev


  Run the tests (should compile CoffeeScript down to JavaScript):
  
    $ npm test
 
 
  Manual compile to JS:
  
    $ npm run-script build
  
    
  Watch for changes in the CoffeeScript sources, and automatically compile to JS:
  
    $ npm run-script watch
        
  
  Bind to the system (may need sudo depending on your NPM config):
  
    $ npm link

## TODO

  Need to implement binding of help/description strings to unix man and --help
## Documentation

### Defining an interface

  For the moment the syntax is minimal, and code is documentation. You are warned.

``` coffeescript
#!/usr/bin/env coffee

# use
cmdr = require 'cmdr'

# think
api =
  help:
    pi: ->
      console.log "don't use me"

  foo: (name="") ->
    if name.length is 0
      console.log "you need to provide a bar name"
      process.exit 1
    else
      console.log "creating bar #{name}"
      process.exit 0
  
  list:
    things: ->
      # replace by your custom join(), colors, cliff whatever code
      console.log "- this\n- and this\n- and this"

  pi:
    func: ->
      console.log 3.1415

# profit
cmdr api

```

  Now you should be able to use your program in command-line, to call the functions:

``` bash
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
