"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URL = void 0;
const shared_1 = require("../shared");
exports.URL = {
    get: (full = false, fullLine = true, flags) => (0, shared_1.reGet)((0, shared_1.regexpUrl)(full), fullLine, flags),
    verify: (text, full = false) => (0, shared_1.reVerify)((0, shared_1.regexpUrl)(full), text),
    find: (text, full = false) => (0, shared_1.reFind)((0, shared_1.regexpUrl)(full), text),
    replace: (text, replaceWith = '', full = false) => (0, shared_1.reReplace)((0, shared_1.regexpUrl)(full), text, replaceWith),
};
//# sourceMappingURL=url.js.map