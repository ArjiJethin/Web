/**
 * Print colorful console text in terminal
 */
exports.black = function (text) {
  console.log('\x1B[30m' + text + '\x1B[39m');
}

exports.red = function (text) {
  console.log('\x1B[31m' + text + '\x1B[39m');
}

exports.green = function (text) {
  console.log('\x1B[32m' + text + '\x1B[39m');
}

exports.yellow = function (text) {
  console.log('\x1B[33m' + text + '\x1B[39m');
}

exports.blue = function (text) {
  console.log('\x1B[34m' + text + '\x1B[39m');
}

exports.magenta = function (text) {
  console.log('\x1B[35m' + text + '\x1B[39m');
}

exports.cyan = function (text) {
  console.log('\x1B[36m' + text + '\x1B[39m');
}

exports.white = function (text) {
  console.log('\x1B[37m' + text + '\x1B[39m');
}

exports.grey = function (text) {
  console.log('\x1B[90m' + text + '\x1B[39m');
}
