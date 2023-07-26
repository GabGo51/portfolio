import styled from "styled-components"
import Header from "./Header";
import About from "./About";

function App() {
  return (
  <Box>
   <Header/>
   <About/>
  </Box>
  );
}

const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export default App;
