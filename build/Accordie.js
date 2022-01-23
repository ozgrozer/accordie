function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useState, useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { MainContext, MainProvider } from './MainContext';

const clx = (...classes) => classes.join(' ');

const Panel = props => {
  const {
    Heading,
    Content,
    panelId,
    classList,
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

  const customStyle = classList !== undefined;
  const panelIsOpen = accordions[panelId];
  const panelClassName = customStyle ? clx(classList.panel, panelIsOpen ? classList.open : classList.close) : clx(styles.panel, panelIsOpen ? styles.open : styles.close);
  const headingClassName = customStyle ? classList.heading : styles.heading;
  const contentClassName = customStyle ? classList.content : styles.content;
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
  classList
}) => {
  return /*#__PURE__*/React.createElement(MainProvider, null, children.map((child, key) => {
    if (child.type.name !== 'Panel') return null;
    return /*#__PURE__*/React.createElement(Panel, _extends({
      key: key,
      panelId: key
    }, child.props, {
      classList: classList
    }));
  }));
};

module.exports = {
  Panel,
  Accordie
};

