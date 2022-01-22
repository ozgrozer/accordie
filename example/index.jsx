import React from 'react'
import ReactDOM from 'react-dom'

import { Accordie, Panel } from './../build/Accordie.js'

const Index = () => {
  return (
    <div>
      <Accordie>
        <Panel
          Heading='heading1'
          Content='content1'
        />

        <Panel
          Heading={<div>heading2</div>}
          Content={<div>content2</div>}
        />
      </Accordie>
    </div>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
