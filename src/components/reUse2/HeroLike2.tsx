import React from 'react'
import styled from 'styled-components'
import img from "../../assets/african-american-young-programmer-working-remote-f-2022-03-25-18-49-53-utc.jpeg"
import Button from '../static/Button'

const HeroLike2 = () => {

  return (
    <div>
        <Container>
            <Card>
            <Title>Connecting  <i>your brilliance </i>
with opportunity</Title>

            <ButtonWrapper>
                    <Button 
                    text='Apply to the Talent Network'
                    width='300px'
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

export default HeroLike2

const ButtonWrapper = styled.div`
display: flex;
margin-top: 30px;
`

const Title = styled.div`
font-size: 38px;
width: 500px;
color: white;
line-height: 1.2;
text-align: center;
margin-top: 40px;
`

const Card = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgba(35, 50, 50, 0.718);
`
const Container = styled.div`
display: flex;
    width: 100%;
    min-height: 350px;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    /* padding-top: 100px; */
`