'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const e = require('./src/index.js'),
  u = require('./src/button/index.js'),
  i = {
    install: (t) => {
      for (let n in e) t.use(e[n]);
    }
  };
exports.Button = u.Button;
exports.default = i;
