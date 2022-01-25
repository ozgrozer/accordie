import React from 'react'
import ReactDOM from 'react-dom'

import './styles.css'
import styles from './styles.module.scss'
import { Accordie, Panel } from './../src/Accordie'

const NoCustomStyle = () => {
  return (
    <>
      <div className='title'>No Custom Style</div>

      <div className='accordie'>
        <Accordie>
          <Panel
            Heading='Heading 1'
            Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>}
          />

          <Panel
            Heading='Heading 2'
            Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>}
          />
        </Accordie>
      </div>
    </>
  )
}

const RegularCSS = () => {
  return (
    <>
      <div className='title'>Regular CSS</div>

      <div className='accordie'>
        <Accordie
          customStyle
          classNames={{
            panel: 'panel',
            heading: 'heading',
            content: 'content',
            open: 'open',
            close: 'close'
          }}
        >
          <Panel
            Heading='Heading 1'
            Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>}
          />

          <Panel
            Heading='Heading 2'
            Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>}
          />
        </Accordie>
      </div>
    </>
  )
}

const CSSModules = () => {
  return (
    <>
      <div className='title'>CSS Modules</div>

      <div className={styles.accordie}>
        <Accordie
          customStyle
          classNames={{
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

          <Panel
            Heading={<div>Heading 3</div>}
            Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>}
          />
        </Accordie>
      </div>
    </>
  )
}

const App = () => {
  return (
    <div style={{ width: '500px', margin: 'auto' }}>
      <NoCustomStyle />
      <RegularCSS />
      <CSSModules />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
