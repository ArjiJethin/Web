'use strict';

function overrideResponse(res) {
  var originalResFns = {};
  var noop = function noop() {};

  // weird magic so that `response-spy` can intercept the output
  // but not write it to `res`
  ['write', 'end', 'writeHead'].forEach(function replaceFns(fn) {
    originalResFns[fn] = res[fn].bind(res);
    res[fn] = noop;
  });

  return originalResFns;
}

module.exports = overrideResponse;
