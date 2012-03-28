# node-cmdr

*A library to define command line interfaces*

## Licence

  New-Style BSD: you can use it for doing evil stuff, but I'm not responsible (see [LICENCE.txt](https://github.com/daizoru/node-cmdr/blob/master/LICENCE.txt) for details).
  
## How it work

  You define an object with a sub-function "func", or a sub-object
   
 
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

## Documentation

### API    

#### Human-readable

  NO.
