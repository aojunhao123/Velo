'use strict';
Object.defineProperties(exports, {
  __esModule: { value: !0 },
  [Symbol.toStringTag]: { value: 'Module' }
});
const l = require('./button.vue.js'),
  s = (t) => (
    (t.install = (n) => {
      const u = t.name;
      n.component(u, t);
    }),
    t
  ),
  e = s(l.default);
exports.Button = e;
exports.default = e;
