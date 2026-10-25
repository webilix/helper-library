"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAY = void 0;
const shared_1 = require("../shared");
exports.DAY = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpDay, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpDay, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpDay, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpDay, text, replaceWith),
};
//# sourceMappingURL=day.js.map