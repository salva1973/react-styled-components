# react-styled-components

## Basic styling options in React projects

- inline styles
- global css (styles in a stylesheet)
- for both: shortcomings (reusability, name collisions)

## Styled components

```js
const BasicTitle = styled.h1`
  text-align: center;
  text-transform: capitalize;
  color: ${(props) => props.special && 'red'}
`
// props are also used
<BasicTitle special>styled component</BasicTitle>
```

will become (the class avoid name collisions):

```html
<h1 class="sc-pNWdM icjfrD">styled component</h1>
```

## Note

Children are automatically handled by styled components (normally we would have
to render them ourselves)

## Extend Styled Components

We're not limited to style html tag, but we can style react components
as well. In this case we use this feature to extend a Styled Component.

```js
export const HipsterButton = styled(DefaultButton)`
  width: 400px;
  background: transparent;
  color: #645cff;
  border: 1px solid #645cff;
`
```

## Material UI

[Link](https://mui.com/core/)
[Installation](https://mui.com/material-ui/getting-started/installation/)

```sh
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
```

Also material components can be extended:

## Wrappers

```js
import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
  return (
    <Wrapper className="bg-grey">
      <h1>{title}</h1>
      <div className="underline"></div>
      <h2 className="title">random</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: var(--primary);
    margin: 0 auto;
  }
`

export default ComplexTitle
```

## Alternative Ways

```js
import styled from 'styled-components'

const ComplexTitle = ({ title, className }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <div className="underline"></div>
    </div>
  )
}

const Wrapper = styled(ComplexTitle)`
  h1 {
    text-transform: capitalize;
    text-align: center;
  }
  .underline {
    width: 5rem;
    height: 0.25rem;
    background: #645cff;
    margin: 0 auto;
  }
`

export default Wrapper
```

## Global Styles injected into Styled Component

```js
// bg-grey defined in global index.css
<Wrapper className='bg-grey'>
```

## CSS Global Variables

You can use them without import.

```css
:root {
  --primary: #645cff;
}

.underline {
  width: 5rem;
  height: 0.25rem;
  background: var(--primary);
  margin: 0 auto;
}
```

## Utils approach (utils.js)

In alternative to CSS Global Variables...
Difference: you need explicit import (preferable).
But utils.js: interesting to define functions besides
values (border example).
Instead of value: 1px solid red for the border, we
could define a function with 3 params.
Very good approach for customizations.

[utils.js]

```js
export const colors = {
  secondary: '#ff4455',
}

// we could have also default types (e.g. for the color)
// using an object we can ignore the order of args
export const setupBorder = ({ width, type, color = 'red' }) => {
  return `${width}px ${type} ${color}`
}
```

[AlternativeTitle.js]

```js
import { colors, setupBorder } from '../utils'

.underline {
    width: 5rem;
    height: 0.25rem;
    /* We interpolate the value */
    background: ${colors.primary};
    margin: 0 auto;
  }

.box {
    height: 10px;
    border: ${setupBorder({ width: 5, type: 'solid', color: 'green'})};
  }
```

## Global Styles

Alternative to global CSS variables.

[global-styles.js]

## Theming

e.g.: Light vs Dark Theme

## Animations

## As Prop

## CSS Prop

To make it work we either need Babel or Macro.

This also provides better classnames (more user-friendly)

```js
import styled from 'styled-components/macro'
```

## CSS Helper Function

Groups together multiple CSS declarations.
Not related to macro.

## Attribute method
