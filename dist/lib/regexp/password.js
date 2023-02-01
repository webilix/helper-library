"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD = void 0;
const shared_1 = require("../shared");
exports.PASSWORD = {
    get: (length = 8, forceLowerCase = true, forceUpperCase = true, forceNumber = true, fullLine = true, flags) => (0, shared_1.reGet)((0, shared_1.regexpPassword)(length, forceLowerCase, forceUpperCase, forceNumber), fullLine, flags),
    verify: (text, length = 8, forceLowerCase = true, forceUpperCase = true, forceNumber = true) => (0, shared_1.reVerify)((0, shared_1.regexpPassword)(length, forceLowerCase, forceUpperCase, forceNumber), text),
};
//# sourceMappingURL=password.js.map