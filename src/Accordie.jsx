import React, { useContext } from 'react'

import styles from './styles.module.css'

import { MainContext, MainProvider } from './MainContext'

const clx = (...classes) => classes.join(' ')

const Panel = ({ Heading, Content, panelId }) => {
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

  const panelClassName = clx(
    styles.panel,
    accordions[panelId] ? styles.open : styles.close
  )

  return (
    <div className={panelClassName}>
      <div
        onClick={toggleContent}
        className={styles.heading}
      >
        {Heading}
      </div>

      <div className={styles.content}>
        {Content}
      </div>
    </div>
  )
}

const Accordie = ({ children }) => {
  return (
    <MainProvider>
      {children.map((child, key) => {
        if (child.type.name !== 'Panel') return null

        return (
          <Panel
            key={key}
            panelId={key}
            {...child.props}
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
