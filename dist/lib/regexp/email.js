"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EMAIL = void 0;
const shared_1 = require("../shared");
exports.EMAIL = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpEmail, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpEmail, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpEmail, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpEmail, text, replaceWith),
};
//# sourceMappingURL=email.js.map