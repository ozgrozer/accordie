import React, { useContext, useState, useEffect, useRef } from 'react'

import styles from './styles.module.scss'
import { MainContext, MainProvider } from './MainContext'

const clx = (...classes) => classes.join(' ')

const Panel = props => {
  const {
    Heading,
    Content,
    panelId,
    classNames,
    customStyle,
    ...otherProps
  } = props

  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)
  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight)
  }, [])

  const { state, setState } = useContext(MainContext)
  const { accordions } = state
  const toggleContent = () => {
    for (const _key in accordions) {
      const key = parseInt(_key)
      if (key !== panelId) {
        accordions[key] = false
      }
    }
    accordions[panelId] = !accordions[panelId]
    setState({ accordions: { ...accordions } })
  }

  const panelIsOpen = accordions[panelId]
  const panelClassName = customStyle
    ? clx(
        classNames.panel,
        panelIsOpen ? classNames.open : classNames.close
      )
    : clx(
      styles.panel,
      panelIsOpen ? styles.open : styles.close
    )
  const headingClassName = customStyle
    ? classNames.heading
    : styles.heading
  const contentClassName = customStyle
    ? classNames.content
    : styles.content

  const contentStyle = { height: panelIsOpen ? contentHeight : 0 }

  return (
    <div
      {...otherProps}
      className={panelClassName}
    >
      <div
        onClick={toggleContent}
        className={headingClassName}
      >
        {Heading}
      </div>

      <div
        ref={contentRef}
        style={contentStyle}
        className={contentClassName}
      >
        {Content}
      </div>
    </div>
  )
}

const Accordie = ({ children, classNames, customStyle }) => {
  return (
    <MainProvider>
      {children.map((child, key) => {
        if (child.type.name !== 'Panel') return null

        return (
          <Panel
            key={key}
            panelId={key}
            {...child.props}
            classNames={classNames}
            customStyle={customStyle}
          />
        )
      })}
    </MainProvider>
  )
}

module.exports = {
  Panel,
  Accordie
}
