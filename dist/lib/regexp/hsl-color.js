"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HSL_COLOR = void 0;
const shared_1 = require("../shared");
exports.HSL_COLOR = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpHSLColor, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpHSLColor, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpHSLColor, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpHSLColor, text, replaceWith),
};
//# sourceMappingURL=hsl-color.js.map