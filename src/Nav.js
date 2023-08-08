import React from 'react'
import { styled } from 'styled-components'

const Nav = () => {
  return (
    <Container>
      <i class="fa-brands fa-linkedin"></i>
    </Container>
    
  )
}

const Container  = styled.div`
position: fixed;
top: 10px;
left: 10px;
color: white;
mix-blend-mode: difference;
z-index: 100;
`

export default Nav