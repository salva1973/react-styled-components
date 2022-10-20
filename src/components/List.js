import styled, { css } from 'styled-components'
// CSS Helper, no macro (no css props)
// Could be done also without the helper function
// but the helper function gives highlights, etc.

const fruits = ['orange', 'apple', 'banana', 'peach']

const Item = styled.li`
  list-style-type: none;
  ${({ odd }) => {
    return odd
      ? css`
          color: white;
          background: red;
          font-size: 1.5rem;
          padding: 1.5rem;
        `
      : css`
          color: #222;
          padding: 1rem;
        `
  }}
`

const List = () => {
  return (
    <ul>
      {fruits.map((item, index) => {
        return (
          <Item key={index} odd={(index + 1) % 2 !== 0}>
            {item}
          </Item>
        )
      })}
    </ul>
  )
}
export default List
