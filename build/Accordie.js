"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _react = _interopRequireWildcard(require("react"));

var _excluded = ["Heading", "Content", "panelId", "accordions", "classNames", "customStyle", "setAccordions"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var clx = function clx() {
  for (var _len = arguments.length, classes = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
    classes[_key2] = arguments[_key2];
  }

  return classes.join(' ');
};

var Panel = function Panel() {
  return null;
};

var PanelInner = function PanelInner(props) {
  var Heading = props.Heading,
      Content = props.Content,
      panelId = props.panelId,
      accordions = props.accordions,
      classNames = props.classNames,
      customStyle = props.customStyle,
      setAccordions = props.setAccordions,
      otherProps = _objectWithoutProperties(props, _excluded);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      contentHeight = _useState2[0],
      setContentHeight = _useState2[1];

  var contentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setContentHeight(contentRef.current.scrollHeight);
  }, []);

  var toggleContent = function toggleContent() {
    for (var _key in accordions) {
      var key = parseInt(_key);

      if (key !== panelId) {
        accordions[key] = false;
      }
    }

    accordions[panelId] = !accordions[panelId];
    setAccordions(_objectSpread({}, accordions));
  };

  var panelIsOpen = accordions[panelId];
  var panelClassName = customStyle ? clx(classNames.panel, panelIsOpen ? classNames.open : classNames.close) : clx('panel', classNames.panel, panelIsOpen ? clx('open', classNames.open) : clx('close', classNames.close));
  var headingClassName = customStyle ? classNames.heading : clx('heading', classNames.heading);
  var contentClassName = customStyle ? classNames.content : clx('content', classNames.content);
  var contentStyle = {
    height: panelIsOpen ? contentHeight : 0
  };
  return /*#__PURE__*/_react["default"].createElement("div", _extends({}, otherProps, {
    className: panelClassName
  }), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: toggleContent,
    className: headingClassName
  }, Heading), /*#__PURE__*/_react["default"].createElement("div", {
    ref: contentRef,
    style: contentStyle,
    className: contentClassName
  }, Content));
};

var Accordie = function Accordie(_ref) {
  var children = _ref.children,
      classNames = _ref.classNames,
      customStyle = _ref.customStyle;

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      accordions = _useState4[0],
      setAccordions = _useState4[1];

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children.map(function (child, key) {
    if (child.type.name !== 'Panel') return null;
    return /*#__PURE__*/_react["default"].createElement(PanelInner, _extends({
      key: key,
      panelId: key
    }, child.props, {
      accordions: accordions,
      customStyle: customStyle,
      setAccordions: setAccordions,
      classNames: classNames || {}
    }));
  }));
};

module.exports = {
  Panel: Panel,
  Accordie: Accordie
};