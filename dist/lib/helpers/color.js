"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR = void 0;
const is_1 = require("../is");
const re_1 = require("../re");
exports.COLOR = {
    getFormat: (color) => !is_1.IS.STRING.color(color)
        ? null
        : re_1.RE.HEX_COLOR.verify(color)
            ? 'HEX'
            : re_1.RE.HSL_COLOR.verify(color)
                ? 'HSL'
                : re_1.RE.RGB_COLOR.verify(color)
                    ? 'RGB'
                    : null,
};
//# sourceMappingURL=color.js.map