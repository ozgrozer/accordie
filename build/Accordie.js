function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext } from 'react';
import styles from './styles.module.css';
import { MainContext, MainProvider } from './MainContext';

const clx = (...classes) => classes.join(' ');

const Panel = ({
  Heading,
  Content,
  panelId
}) => {
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

  const panelClassName = clx(styles.panel, accordions[panelId] ? styles.open : styles.close);
  return /*#__PURE__*/React.createElement("div", {
    className: panelClassName
  }, /*#__PURE__*/React.createElement("div", {
    onClick: toggleContent,
    className: styles.heading
  }, Heading), /*#__PURE__*/React.createElement("div", {
    className: styles.content
  }, Content));
};

const Accordie = ({
  children
}) => {
  return /*#__PURE__*/React.createElement(MainProvider, null, children.map((child, key) => {
    if (child.type.name !== 'Panel') return null;
    return /*#__PURE__*/React.createElement(Panel, _extends({
      key: key,
      panelId: key
    }, child.props));
  }));
};

module.exports = {
  Panel,
  Accordie
};

