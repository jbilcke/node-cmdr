(function() {
  var error, log, main, _ref;

  _ref = require("daizoru-toolbox"), log = _ref.log, error = _ref.error;

  main = function(model, a) {
    var i, msg, stack, _ref2;
    if (a == null) a = [];
    stack = model;
    msg = "";
    for (i = 0, _ref2 = a.length; 0 <= _ref2 ? i < _ref2 : i > _ref2; 0 <= _ref2 ? i++ : i--) {
      if (stack[a[i]] != null) {
        if (msg.length !== 0) msg += ".";
        msg += "" + a[i];
        stack = stack[a[i]];
        if (i === a.length - 1) stack();
      } else {
        try {
          stack.apply(null, a.slice(i));
        } catch (e) {
          log("exception: " + e);
          if (msg.length === 0) {
            if (a.length === 0) {
              model.help["default"]();
            } else {
              error("cannot call help");
            }
          } else {
            error("never heard about " + msg);
          }
          return;
        }
      }
    }
  };

  module.exports = function(model) {
    return main(model, process.argv.slice(2));
  };

}).call(this);
