import React from 'react'
import { styled } from 'styled-components'

const Nav = () => {
  return (
    <Container target="#" href='https://www.linkedin.com/in/gabriel-gosselin-802bb5247/'>
      <i class="fa-brands fa-linkedin"></i>
    </Container>
    
  )
}

const Container  = styled.a`
position: fixed;
top: 10px;
right: 15px;
color: white;
mix-blend-mode: difference;
z-index: 100;
scale: 1.2;
`

export default Nav