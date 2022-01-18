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
var LoadingIcon_1 = __importDefault(require("../LoadingIcon"));
function Button(_a) {
    var label = _a.label, loading = _a.loading, varient = _a.varient, disabled = _a.disabled, props = __rest(_a, ["label", "loading", "varient", "disabled"]);
    var baseStyles = "h-10 mt-6 md:mt-0 transition border font-bold rounded-lg px-8 text-white ";
    if (varient === 'outline') {
        return (react_1.default.createElement("button", __assign({}, props, { disabled: loading || disabled ? true : false, className: "border-blue-500 ".concat(loading || disabled ? 'cursor-not-allowed text-blue-400' : 'hover:bg-blue-600 hover:text-blue-100 text-blue-500', " ").concat(baseStyles) }), loading ? (react_1.default.createElement(LoadingIcon_1.default, null)) : label));
    }
    if (varient === 'ghost') {
        return (react_1.default.createElement("button", __assign({}, props, { disabled: loading || disabled ? true : false, className: "".concat(baseStyles, " border-0 text-blue-500 hover:text-blue-900 ").concat(loading || disabled ? 'cursor-not-allowed bg-blue-400' : 'hover:bg-blue-200', " ") }), loading ? (react_1.default.createElement(LoadingIcon_1.default, null)) : label));
    }
    return (react_1.default.createElement("button", __assign({}, props, { disabled: loading || disabled ? true : false, className: " ".concat(loading || disabled ? 'cursor-not-allowed bg-blue-400 border-0' : 'hover:bg-blue-600 bg-blue-500 hover:text-blue-100', " ").concat(baseStyles) }), loading ? (react_1.default.createElement(LoadingIcon_1.default, null)) : label));
}
exports.default = Button;
Button.propTypes = {
    label: prop_types_1.default.string.isRequired,
    onClick: prop_types_1.default.func,
    loading: prop_types_1.default.bool,
    varient: prop_types_1.default.string,
    disabled: prop_types_1.default.bool,
};
Button.defaultProps = {
    onClick: undefined,
    loading: false,
    disabled: false,
};
