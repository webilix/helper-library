"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JSON_DATE = void 0;
const shared_1 = require("../shared");
exports.JSON_DATE = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpJsonDate, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpJsonDate, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpJsonDate, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpJsonDate, text, replaceWith),
};
//# sourceMappingURL=json-date.js.map