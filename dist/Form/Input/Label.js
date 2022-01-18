"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var prop_types_1 = __importDefault(require("prop-types"));
function Label(_a) {
    var label = _a.label, htmlFor = _a.htmlFor, props = __rest(_a, ["label", "htmlFor"]);
    return (react_1.default.createElement("label", { className: 'block text-gray-500 mb-2', htmlFor: htmlFor ? htmlFor : undefined }, label));
}
exports.default = Label;
Label.propTypes = {
    label: prop_types_1.default.string.isRequired,
    onClick: prop_types_1.default.func,
    loading: prop_types_1.default.bool,
    varient: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
};
Label.defaultProps = {
    onClick: undefined,
    loading: false,
    disabled: false,
};
