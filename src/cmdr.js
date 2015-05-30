export default function cmdr(patterns) {
  const words = process.argv.slice(2);
  const request = words.join(" ");

  const keys = Object.keys(patterns);

  for (let i = 0; i < keys.length; i++) {
    const pattern = keys[i];
    const callback = patterns[pattern];
    const match = (new RegExp(pattern)).exec(request);
    if (!match) {
      continue;
    }
    try {
      const result = callback.apply(null, (match.length === 1) ? words : match.slice(1, 1 + match.length));
      if (typeof result === 'string'){
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
};
