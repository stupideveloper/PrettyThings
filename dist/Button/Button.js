"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _LoadingIcon = _interopRequireDefault(require("../LoadingIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      loading = _ref.loading,
      type = _ref.type,
      disabled = _ref.disabled;
  var baseStyles = "h-10 mt-6 md:mt-0 transition border font-bold rounded-lg px-8 text-white ";

  if (type === 'outline') {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      disabled: loading || disabled ? true : false,
      className: "border-blue-500 ".concat(loading || disabled ? 'cursor-not-allowed text-blue-400' : 'hover:bg-blue-600 hover:text-blue-100 text-blue-500', " ").concat(baseStyles),
      onClick: onClick
    }, loading ? /*#__PURE__*/_react.default.createElement(_LoadingIcon.default, null) : label);
  }

  if (type === 'ghost') {
    return /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      disabled: loading || disabled ? true : false,
      className: "".concat(baseStyles, " border-0 text-blue-500 hover:text-blue-900 ").concat(loading || disabled ? 'cursor-not-allowed bg-blue-400' : 'hover:bg-blue-200', " "),
      onClick: onClick
    }, loading ? /*#__PURE__*/_react.default.createElement(_LoadingIcon.default, null) : label);
  }

  return /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    disabled: loading || disabled ? true : false,
    className: " ".concat(loading || disabled ? 'cursor-not-allowed bg-blue-400 border-0' : 'hover:bg-blue-600 bg-blue-500 hover:text-blue-100', " ").concat(baseStyles),
    onClick: onClick
  }, loading ? /*#__PURE__*/_react.default.createElement(_LoadingIcon.default, null) : label);
}

Button.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func,
  loading: _propTypes.default.bool,
  type: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
Button.defaultProps = {
  onClick: undefined,
  loading: false,
  disabled: false
};