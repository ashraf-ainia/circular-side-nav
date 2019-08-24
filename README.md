## Demo

#### [Live demo](https://ashraf-ainia.github.io/circular-side-nav/)

Local demo:

```
git clone https://github.com/ashraf-ainia/circular-side-nav.git
cd circular-side-nav
npm i && npm start
```

## Installation

```
npm i circular-side-nav

```

## Example

```jsx
import React from 'react';
import CircularSideNav from 'circular-side-nav';

function App() {
  return(
    <CircularSideNav
        backgroundColor='#ccc'
        navSize={15}
        elements={[
            <div></div>,
            <p></p>
            ]}
        animation='sequence'
        animationPeriod={0.04}
      />
  )
}
```

## Component Props

#### backgroundImg: String
#### backgroundColor: String
#### navSize: number
#### elements: JSX.Element[]
#### animation: String | 'sequence'
#### animationPeriod: number

## License

MIT
