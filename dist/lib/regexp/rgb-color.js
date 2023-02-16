"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RGB_COLOR = void 0;
const shared_1 = require("../shared");
exports.RGB_COLOR = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpRGBColor, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpRGBColor, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpRGBColor, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpRGBColor, text, replaceWith),
};
//# sourceMappingURL=rgb-color.js.map