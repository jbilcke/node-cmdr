module.exports = (patterns) ->
  request = process.argv[2...].join(" ")
  for pattern, cb of patterns
    match = (new RegExp pattern).exec request
    continue unless match?
    cb match[1...1+cb.length]...
    return
  patterns.help? request
