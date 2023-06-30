import React from 'react'
import styled from 'styled-components'
import img from "../../assets/shutterstock_1862846512-2048x1434.jpeg"
import Button from '../static/Button'

const HeroLookAlike = () => {

  return (
    <div>
        <Container>
            <Card>
            <Title><i>Grow your potential beyond borders</i></Title>

            <Text>Connect with a global network and land international opportunities.</Text>

            <ButtonWrapper>
                    <Button 
                    text='Discover opportunities'
                    width='250px'
                    height='65px'
                    br='40px'
                    bg='#56C870'
                    mr='10px'
                    fs='20px'
                    />     
            </ButtonWrapper>
            </Card>
        </Container>
    </div>
  )
}

export default HeroLookAlike

const ButtonWrapper = styled.div`
display: flex;
margin-left: 35px;
margin-top: 30px;
`
const Text = styled.div`
font-size: 18px;
margin-top: 30px;
margin-left: 35px;
color: white;
`

const Title = styled.div`
font-size: 40px;
width: 800px;
color: white;
margin-left: 35px;
line-height: 1.2;
/* margin-top: 10%; */
`

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
width: 100%;
background-color: rgba(33, 57, 57, 0.718);
`

const Container = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 600px;
`