"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DOMAIN = void 0;
const shared_1 = require("../shared");
exports.DOMAIN = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpDomain, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpDomain, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpDomain, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpDomain, text, replaceWith),
};
//# sourceMappingURL=domain.js.map