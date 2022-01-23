import React from 'react'
import ReactDOM from 'react-dom'

import { Accordie, Panel } from './../src/Accordie'

const RegularCSS = () => {
  return (
    <>
      <style>
        {`
          .panel {
            margin-top: 10px;
          }
          .panel.open .content {
            display: block;
          }
          .panel.close .content {
            display: none;
          }
          .heading {
            padding: 10px;
            background-color: #ddd;
          }
          .content {
            padding: 10px;
          }
        `}
      </style>

      <div>
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
            Heading='heading 1'
            Content='content 1'
          />

          <Panel
            Heading='heading 2'
            Content='content 2'
          />
        </Accordie>
      </div>
    </>
  )
}

ReactDOM.render(<RegularCSS />, document.getElementById('root'))
