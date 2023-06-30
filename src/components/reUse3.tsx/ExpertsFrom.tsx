import React from 'react'
import styled from 'styled-components'
import img from "../../assets/section-image-7-1024x897.png"
import Button from '../static/Button'

const ExpertsFrom = () => {
  return (
    <div>
        <Container>
                <Title>Experts from around the world</Title>
                <Text2>With flexibility in mind, we’ve built our matching process to easily scale up or
down based on your team’s changing needs.</Text2>
            <Div>
                <Left>
                <Pics src={img} />
            </Left>
            <Right>
            <Title2>Hire Individuals</Title2>
                <Text>Find the right technologist to complement your existing team and hit the ground running on impactful initiatives.</Text>
            <Title2>Build Teams</Title2>
                <Text>Scale rapidly with a full team of technologists embedded at your company to unlock more growth and potential.</Text>
                <Button 
                    text='Discover your Talent'
                    width='230px'
                    height='65px'
                    br='40px'
                    bg='#56C870'
                    mr='10px'
                    fs='20px'
                    />
            </Right>
            </Div>
        </Container>
    </div>
  )
}

export default ExpertsFrom

const Right = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 53%;
margin-left: 25px;
margin-top: -150px;
`

const Pics = styled.img`
object-fit: contain;
width: 550px;
height: 700px;
margin-left: 35px ;
`

const Left = styled.div`
width: 47%;
height: 100%;
display: flex;
align-items: center;
`

const  Text2 = styled.div`
font-size: 20px;
font-weight: 300;
width: 650px;
margin-top: 15px;
text-align: center;
`
const  Text = styled.div`
font-size: 20px;
font-weight: 300;
width: 650px;
margin-top: 15px;
margin-bottom: 30px;
`

const  Title2 = styled.div`
font-size: 35px;
`
const  Title = styled.div`
font-size: 40px;
margin-top: 50px;
`

const Div = styled.div`
display: flex;
justify-content: center;
margin-top: -70px;
`

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
    width: 100%;
    min-height: 400px;
    display: flex;
`