import React, { useState, useEffect, useRef } from 'react'

import './styles.scss'

const clx = (...classes) => classes.join(' ')

const Panel = () => null

const PanelInner = props => {
  const {
    Heading,
    Content,
    panelId,
    accordions,
    classNames,
    customStyle,
    setAccordions,
    ...otherProps
  } = props

  const [contentHeight, setContentHeight] = useState(0)
  const contentRef = useRef(null)
  useEffect(() => {
    setContentHeight(contentRef.current.scrollHeight)
  }, [])

  const toggleContent = () => {
    for (const _key in accordions) {
      const key = parseInt(_key)
      if (key !== panelId) {
        accordions[key] = false
      }
    }
    accordions[panelId] = !accordions[panelId]
    setAccordions({ ...accordions })
  }

  const panelIsOpen = accordions[panelId]
  const panelClassName = customStyle
    ? clx(
        classNames.panel,
        panelIsOpen ? classNames.open : classNames.close
      )
    : clx(
      'panel',
      classNames.panel,
      panelIsOpen
        ? clx('open', classNames.open)
        : clx('close', classNames.close)
    )
  const headingClassName = customStyle
    ? classNames.heading
    : clx('heading', classNames.heading)
  const contentClassName = customStyle
    ? classNames.content
    : clx('content', classNames.content)

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
  const [accordions, setAccordions] = useState([])

  return (
    <>
      {children.map((child, key) => {
        if (child.type.name !== 'Panel') return null

        return (
          <PanelInner
            key={key}
            panelId={key}
            {...child.props}
            accordions={accordions}
            customStyle={customStyle}
            setAccordions={setAccordions}
            classNames={classNames || {}}
          />
        )
      })}
    </>
  )
}

module.exports = {
  Panel,
  Accordie
}
