// user can input command line arguments indicating the number of seconds for a "beep"
'use strict'
for (let j = 2; j < process.argv.length; j++) {
  // line arguments are strings ... turn to numbers if possible
  let lineInput = parseFloat(process.argv[j])
  if ((lineInput) && (lineInput >= 0)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, process.argv[j] * 1000)
  }
}
