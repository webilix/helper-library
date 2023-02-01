"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IP4 = void 0;
const shared_1 = require("../shared");
exports.IP4 = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpIP4, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpIP4, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpIP4, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpIP4, text, replaceWith),
};
//# sourceMappingURL=ip4.js.map