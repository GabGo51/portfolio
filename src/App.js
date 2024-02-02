import styled from "styled-components"
import Header from "./Header";
import About from "./About";
import Me from "./Me";
import Projects from "./Projects";
import Nav from "./Nav"
import Cursor from "./Cursor";
import Contact from "./Contact";
import Header2 from "./Header2";



function App() {

  return (
  <Box>
    <Cursor/>
    <Nav/>
    <Header2/>
    {/* <Header/> */}
    <About/>
    <Me/>
    <Projects/>
    <Contact/>
  </Box>
  );
}


const Box = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow-x: hidden;
`

export default App;
