"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HEX_COLOR = void 0;
const shared_1 = require("../shared");
exports.HEX_COLOR = {
    get: (fullLine = true, flags) => (0, shared_1.reGet)(shared_1.regexpHexColor, fullLine, flags),
    verify: (text) => (0, shared_1.reVerify)(shared_1.regexpHexColor, text),
    find: (text) => (0, shared_1.reFind)(shared_1.regexpHexColor, text),
    replace: (text, replaceWith = '') => (0, shared_1.reReplace)(shared_1.regexpHexColor, text, replaceWith),
};
//# sourceMappingURL=hex-color.js.map