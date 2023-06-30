import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
      <Container>
          <Big>Andela acquires Qualified.io and Codewars</Big>
          <Small>Learn More</Small>
      </Container>
    </div>
  )
}

export default Header

const Small = styled.div`
font-size: 16px;
font-weight: 500;
margin-top: 5px;
`
const Big = styled.div`
font-weight: 500;
margin-right: 20px;
`
const Container = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 100%;
  color: #474747;
  background-color: white;
  /* margin-bottom: 20px; */
  position: fixed;
  top:0;
`