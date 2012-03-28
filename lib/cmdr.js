(function() {
  var cmdr, error, log, main, _ref;

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
        if (i === a.length - 1) {
          log("end of stack, calling..");
          stack.func();
        }
      } else {
        try {
          log("calling stack.func " + a.slice(i) + "...");
          stack.func.apply(stack, a.slice(i));
        } catch (e) {
          log("exception: " + e);
          if (msg.length === 0) {
            if (a.length === 0) {
              log(model.help.func());
            } else {
              error("never heard about '" + a[0] + "'");
            }
          } else {
            error("never heard about " + msg);
          }
          return;
        }
      }
    }
  };

  exports.cmdr = cmdr = function(model) {
    return main(model, process.argv.slice(2));
  };

}).call(this);
