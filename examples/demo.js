require("../lib/cmdr")({

  "^buy something (cool|fancy) for (\\w+)": function(adj, target) {
    return "okay I'll find something " + adj + " for " + target;
  },

  "^say ([a-z]+) (\\d+) times?": function(msg, times) {
    for (var i = 0; i < times; i++) {
      console.log(msg);
    }
  },

  // if you omit matching groups, all command line params will be passed
  "^order": function(cmd, something) {
    if (!something) throw new Error("invalid order");
    return "ordering " + something;
  },

});
