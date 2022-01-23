import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import styles from './styles.module.scss'
import { Accordie, Panel } from './../src/Accordie'

const RegularCSS = () => {
  return (
    <>
      <div className='accordie'>
        <Accordie
          classList={{
            panel: 'panel',
            heading: 'heading',
            content: 'content',
            open: 'open',
            close: 'close'
          }}
        >
          <Panel
            Heading='Heading 1'
            Content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />

          <Panel
            Heading='Heading 2'
            Content='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
        </Accordie>
      </div>
    </>
  )
}

const CSSModules = () => {
  return (
    <div className={styles.accordie}>
      <Accordie
        classList={{
          panel: styles.panel,
          heading: styles.heading,
          content: styles.content,
          open: styles.open,
          close: styles.close
        }}
      >
        <Panel
          Heading={<div>Heading 1</div>}
          Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>}
        />

        <Panel
          Heading={<div>Heading 2</div>}
          Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>}
        />
      </Accordie>
    </div>
  )
}

const App = () => {
  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <RegularCSS />
      <CSSModules />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
