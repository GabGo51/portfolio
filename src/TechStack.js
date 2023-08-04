import  styled  from "styled-components"


const TechStack = () =>{


  return(
  <Container>
    <Box>
      <Title>STACK</Title>
      {/* <i class="fa-solid fa-code "></i> */}
    </Box>
    
    <IconContainer>
      <i class="fa-brands fa-react" ></i>
      <i class="fa-brands fa-js" ></i>
      <i class="fa-brands fa-html5" ></i>
      <i class="fa-brands fa-css3" ></i>
      
      
      <i class="fa-brands fa-git-alt" ></i>
      <i class="fa-brands fa-node-js"></i>
      <i class="fa-brands fa-envira"></i>
      
      
    </IconContainer>
  </Container>
  )

}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 200px;

i{
  
  scale: 3;
}


`

const Box  = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`

const Title = styled.p`
font-size: 7vw;

font-weight: 500;
margin-top: -7px;
font-family: Poppins;
`

const IconContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
justify-content: center;


i{
  margin: 40px;
}

`


export default TechStack