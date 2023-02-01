"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RE = void 0;
const date_1 = require("./regexp/date");
const domain_1 = require("./regexp/domain");
const email_1 = require("./regexp/email");
const hex_color_1 = require("./regexp/hex-color");
const ip4_1 = require("./regexp/ip4");
const json_date_1 = require("./regexp/json-date");
const mobile_1 = require("./regexp/mobile");
const numeric_1 = require("./regexp/numeric");
const password_1 = require("./regexp/password");
const time_1 = require("./regexp/time");
const url_1 = require("./regexp/url");
const username_1 = require("./regexp/username");
exports.RE = {
    DATE: date_1.DATE,
    DOMAIN: domain_1.DOMAIN,
    EMAIL: email_1.EMAIL,
    HEX_COLOR: hex_color_1.HEX_COLOR,
    IP4: ip4_1.IP4,
    JSON_DATE: json_date_1.JSON_DATE,
    MOBILE: mobile_1.MOBILE,
    NUMERIC: numeric_1.NUMERIC,
    PASSWORD: password_1.PASSWORD,
    TIME: time_1.TIME,
    URL: url_1.URL,
    USERNAME: username_1.USERNAME,
};
//# sourceMappingURL=re.js.map