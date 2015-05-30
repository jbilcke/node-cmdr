"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = cmdr;

function cmdr(patterns) {
  var words = process.argv.slice(2);
  var request = words.join(" ");

  var keys = Object.keys(patterns);

  for (var i = 0; i < keys.length; i++) {
    var pattern = keys[i];
    var callback = patterns[pattern];
    var match = new RegExp(pattern).exec(request);
    if (!match) {
      continue;
    }
    try {
      var result = callback.apply(null, match.length === 1 ? words : match.slice(1, 1 + match.length));
      if (typeof result === "string") {
        console.log(result);
      }
    } catch (exc) {
      console.error(exc);
    }
    return;
  }
  if (typeof patterns.help === "function") {
    patterns.help(request);
  }
}

;
module.exports = exports["default"];