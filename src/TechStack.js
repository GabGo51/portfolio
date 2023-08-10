import  styled  from "styled-components"
import { useState, useEffect } from "react";

const TechStack = () =>{
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollPosition = window.scrollY;
      
      const triggerPosition = 1200; // Adjust this value to set the scroll amount for the title to appear

      if(scrollPosition >= triggerPosition){
        setShowTitle(true)
      };
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return(
  <Container id = "techstack">
    <p>***Move me around</p>
    <Box>
      <Title className={showTitle ? 'show' : ''}> MY STACK</Title>
      {/* <i className="fa-solid fa-code "></i> */}
    </Box>
    
    <IconContainer>
      <i className="fa-brands fa-react" ></i>
      <i className="fa-brands fa-js" ></i>
      <i className="fa-brands fa-html5" ></i>
      <i className="fa-brands fa-css3" ></i>
      <i className="fa-brands fa-git-alt" ></i>
      <i className="fa-brands fa-node-js"></i>
      <i className="fa-brands fa-envira"></i>
      
      
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
margin-top: 5vw;
margin-bottom: 10vw;
p{
  transform: translateX(160%);
  margin-bottom: 10vw;
}

@media screen and (max-width: 600px) {
  p{
  
  display: none;
 
}
}

`

const Box  = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10vw;
`

const Title = styled.h3`
font-size: 6vw;
font-family: Canter;
font-style: italic;
font-weight: 500;
opacity: 0;
transition: 1s;
transform: translate3d(-15px, -15px, 100px) rotateX(90deg);
&.show{
  opacity: 1;
  transform: translate3d(0, 0, 0) rotateX(0deg);
  
}


@media screen and (max-width: 600px) {
  
  }
`

const IconContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
width: 100vw;

i{
  margin: 50px 80px;
  scale: 6;
  @media screen and (max-width: 600px) {
  scale: 3;
  margin: 40px;
  }
}



`


export default TechStack