# node-cmdr

*command line router*

[![NPM](https://nodei.co/npm/cmdr.png?downloads=true&stars=true)](https://nodei.co/npm/cmdr/)


## Overview

Like dancer/sinatra/berliner, but for commandline interfaces:

``` coffeescript
require('cmdr')
  
  "say ([a-z]+) (\\d+) times?": (msg, times) ->
    for i in [0...times]
      console.log msg
  
  "buy something (cool|fancy) for (\\w+)": (adj, target) ->
    console.log "okay I'll find something #{adj} for #{target}"
    
  "help": (cmd) ->
    console.log "sorry, command #{cmd} is not recognized.\nValid commands are: ..."
```

 Then use it:

 
```
$ myprogram say hello 4 times
hello
hello
hello
hello
```

Problem solved. 


### Licensing

  BSD (see [LICENCE.txt](https://github.com/daizoru/node-cmdr/blob/master/LICENCE.txt) for details)

```


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/daizoru/node-cmdr/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

