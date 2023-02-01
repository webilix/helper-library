"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DATE = void 0;
const shared_1 = require("../shared");
exports.DATE = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpDate, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpDate, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpDate, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpDate, text, replaceWith),
};
//# sourceMappingURL=date.js.map