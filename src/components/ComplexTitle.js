import styled from 'styled-components'

const ComplexTitle = ({ title }) => {
  return (
    // <Wrapper className="bg-grey">
    <Wrapper>  
      <h1>{title}</h1>
      <div className="underline"></div>
      {/* <div className="box"></div> */}
      {/* <h2 className="title">random</h2> */}
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
  .title {
    color: blue;
  }
  .box {
    height: 10px;
    border: var(--mainBorder);
  }
`

export default ComplexTitle
