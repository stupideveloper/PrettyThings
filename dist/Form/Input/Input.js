"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
function Input(_a) {
    var props = __rest(_a, []);
    return (react_1.default.createElement("input", __assign({}, props, { className: 'focus:rounded-lg border-0 w-full sm:w-1/2 md:w-auto border-b-2 focus:border-blue-500 transition' })));
}
exports.default = Input;
Input.propTypes = {
    label: prop_types_1.default.string.isRequired,
    onClick: prop_types_1.default.func,
    loading: prop_types_1.default.bool,
    varient: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
};
Input.defaultProps = {
    onClick: undefined,
    loading: false,
    disabled: false,
};
