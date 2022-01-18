"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Outline = exports.Ghost = exports.Default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'PrettyThings/Button',
  component: _Button.default,
  argTypes: {//backgroundColor: { control: 'color' },
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Button.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'Default Button',
  type: 'default'
};
var Outline = Template.bind({});
exports.Outline = Outline;
Outline.args = {
  label: 'Outline Button',
  type: 'outline'
};
var Ghost = Template.bind({});
exports.Ghost = Ghost;
Ghost.args = {
  label: 'Ghost Button',
  type: 'ghost'
};