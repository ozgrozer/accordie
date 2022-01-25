function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useState, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { MainContext, MainProvider } from './MainContext';

const clx = (...classes) => classes.join(' ');

const Panel = props => {
  const {
    Heading,
    Content,
    panelId,
    classNames,
    customStyle,
    ...otherProps
  } = props;
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight);
  }, []);
  const {
    state,
    setState
  } = useContext(MainContext);
  const {
    accordions
  } = state;

  const toggleContent = () => {
    for (const _key in accordions) {
      const key = parseInt(_key);

      if (key !== panelId) {
        accordions[key] = false;
      }
    }

    accordions[panelId] = !accordions[panelId];
    setState({
      accordions: { ...accordions
      }
    });
  };

  const panelIsOpen = accordions[panelId];
  const panelClassName = customStyle ? clx(classNames.panel, panelIsOpen ? classNames.open : classNames.close) : clx(styles.panel, classNames.panel, panelIsOpen ? clx(styles.open, classNames.open) : clx(styles.close, classNames.close));
  const headingClassName = customStyle ? classNames.heading : clx(styles.heading, classNames.heading);
  const contentClassName = customStyle ? classNames.content : clx(styles.content, classNames.content);
  const contentStyle = {
    height: panelIsOpen ? contentHeight : 0
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, otherProps, {
    className: panelClassName
  }), /*#__PURE__*/React.createElement("div", {
    onClick: toggleContent,
    className: headingClassName
  }, Heading), /*#__PURE__*/React.createElement("div", {
    ref: contentRef,
    style: contentStyle,
    className: contentClassName
  }, Content));
};

const Accordie = ({
  children,
  classNames,
  customStyle
}) => {
  return /*#__PURE__*/React.createElement(MainProvider, null, children.map((child, key) => {
    if (child.type.name !== 'Panel') return null;
    return /*#__PURE__*/React.createElement(Panel, _extends({
      key: key,
      panelId: key
    }, child.props, {
      customStyle: customStyle,
      classNames: classNames || {}
    }));
  }));
};

module.exports = {
  Panel,
  Accordie
};

