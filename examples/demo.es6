require('../lib/cmdr')({

  "^buy something (cool|fancy) for (\\w+)": (adj, target) => {
    return `okay I'll find something ${adj} for ${target}`
  },

  "^say ([a-z]+) (\\d+) times?": (msg, times) => {
    for (let i=0; i < times; i++) {
      console.log(msg)
    }
  },

  // if you omit matching groups, all command line params will be passed
  "^order": (cmd, something) => {
    if (!something) throw new Error(`invalid order`)
    return `ordering ${something}`
  },

})
