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

## Global Styles

```js
// bg-grey defined in global index.css
<Wrapper className='bg-grey'>
```
