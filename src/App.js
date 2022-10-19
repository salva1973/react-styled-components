import styledEmotion from '@emotion/styled'
import BasicTitle from './components/BasicTitle'
import { DefaultButton, HipsterButton } from './components/Buttons'
import Button from '@mui/material/Button'
import ComplexTitle from './components/ComplexTitle'

const StyledBtn = styledEmotion(Button)`
  text-transform: capitalize;
`

function App() {
  return (
    // Inline style
    <div style={{ padding: '2rem' }}>
      {/* Global Stylesheet */}
      <ComplexTitle title='more complex title'/>
      <BasicTitle special>styled component</BasicTitle>
      <BasicTitle>styled component</BasicTitle>
      <DefaultButton>click me</DefaultButton>
      <HipsterButton>click me</HipsterButton>
      <Button color="primary" variant="contained">
        Hello World
      </Button>
      <StyledBtn color="primary" variant="contained">
        Hello World
      </StyledBtn>
    </div>
  )
}

export default App
