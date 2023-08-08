import styled from "styled-components"
import Header from "./Header";
import About from "./About";
import Me from "./Me";
import Projects from "./Projects";
import Nav from "./Nav"
function App() {
  return (
  <Box>
    <Nav/>
    <Header/>
    <About/>
    <Me/>
    <Projects/>
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
