import  styled  from "styled-components"
import { useState, useEffect } from "react";

const TechStack = () =>{
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const scrollPosition = window.scrollY;
      
      const triggerPosition = 1100; // Adjust this value to set the scroll amount for the title to appear

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
    <Box>
      <Title className={showTitle ? 'show' : ''}> MY STACK</Title>
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




`

const Box  = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 30px;
`

const Title = styled.p`
font-size: 6vw;
font-family: Canter;
font-style: italic;
font-weight: 500;
margin-top: -7px;
opacity: 0;
transition: 0.4s;
transform: translate3d(-15px, -15px, 100px) rotateX(70deg);
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
  margin: 60px;
  scale: 6;
  @media screen and (max-width: 600px) {
  scale: 3;
  margin: 40px;
  }
}

.fa-react{
  color: #00BEFF ;
}

.fa-html5{
  color: #EB4444;
}



.fa-css3{
  color: #448DEB;
}

.fa-git-alt{
  color: #B70000;
}


.fa-envira{
  color: #189322 ;
}


`


export default TechStack