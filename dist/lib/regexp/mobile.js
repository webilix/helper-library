"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOBILE = void 0;
const shared_1 = require("../shared");
exports.MOBILE = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpMobile, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpMobile, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpMobile, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpMobile, text, replaceWith),
};
//# sourceMappingURL=mobile.js.map