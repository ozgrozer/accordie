# Accordie

[![npm](https://img.shields.io/npm/v/accordie.svg?style=flat-square)](https://www.npmjs.com/package/accordie)
[![license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ozgrozer/accordie/blob/master/license)

Custom React Accordion Component

[Demo](https://codesandbox.io/s/563gu)

## Installation

Install with Yarn

```sh
$ yarn add accordie
```

or NPM

```sh
$ npm i accordie
```

## Usage
```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Accordie, Panel } from 'accordie'

const App = () => {
  return (
    <Accordie>
      <Panel
        Heading={<div>Heading 1</div>}
        Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>}
      />

      <Panel
        Heading={<div>Heading 2</div>}
        Content={<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>}
      />
    </Accordie>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
```

## Props

```<Accordie>```

If customStyle is true classNames overrides all the actual classes.

```jsx
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
```

```<Panel>```

Heading and Content props could be a String or a React Component.

```jsx
<Panel
  Heading='Heading'
  Content={<div>Content</div>}
/>
```

## Contribution

Feel free to contribute. Open a new [issue](https://github.com/ozgrozer/accordie/issues), or make a [pull request](https://github.com/ozgrozer/accordie/pulls).

## License

[MIT](https://github.com/ozgrozer/accordie/blob/master/license)
