"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TIME = void 0;
const shared_1 = require("../shared");
exports.TIME = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpTime, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpTime, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpTime, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpTime, text, replaceWith),
};
//# sourceMappingURL=time.js.map