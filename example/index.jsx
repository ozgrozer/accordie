import React from 'react'
import ReactDOM from 'react-dom'

import './../build/styles.css'
import { Accordie, Panel } from './../build/Accordie'

import './styles.css'
import styles from './styles.module.scss'

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
            panel: 'panel2',
            heading: 'heading2',
            content: 'content2',
            open: 'open2',
            close: 'close2'
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
