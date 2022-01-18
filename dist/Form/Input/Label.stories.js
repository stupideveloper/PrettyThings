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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var react_1 = __importDefault(require("react"));
var Label_1 = __importDefault(require("./Label"));
exports.default = {
    title: 'PrettyThings/Form/Input/Label',
    component: Label_1.default,
};
var Template = function (args) { return react_1.default.createElement(Label_1.default, __assign({}, args)); };
exports.Label = Template.bind({});
exports.Label.args = {
    htmlFor: 'mail',
    label: 'Email',
};
