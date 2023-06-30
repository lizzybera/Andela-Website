import React from 'react'
import styled from 'styled-components'
import img from "../../assets/shutterstock_1241581108.jpeg"
import Button from '../static/Button'

const SparkAThouasnd = () => {

  return (
    <div>
        <Container>
            <Card>
            <Left>
                    <Title>Our commitment to 
<i> your success</i></Title>
                    <Texts>Becoming part of a community
has never been easier.</Texts>

                    <Button 
                    text='Get Started'
                    width='150px'
                    height='60px'
                    br='40px'
                    bg='#56C870'
                    mr='10px'
                    fs='20px'
                    />     
                </Left>
                <Right>
                    <Div1>
                        <Circle>1</Circle>
                        <Rec1></Rec1>
                        <Circle>2</Circle>
                        <Rec2></Rec2>
                        <Circle>3</Circle>
                    </Div1>
                    <Div2>
                    <Title2>Demonstrate your skills</Title2>
                    <Text>Join our expert community by completing a short assessment to showcase your skills.</Text>
<br />
<br />
                    <Title2>Personalized matching</Title2>
                    <Text>You’ve done the work to build your experience and knowledge. Now we’ll find your dream role through enhancing your profile, career coaching, and introducing you to the world’s most innovative companies.</Text>
                    <br />
                    <br />
                    <Title2>Unlock your potential</Title2>
                    <Text>Once you land your perfect role, Andela is here to support you to hone your craft and achieve your goals.</Text>
                    </Div2>
                </Right>
            </Card>
        </Container>
    </div>
  )
}

export default SparkAThouasnd

const Text = styled.div`
font-size: 18px;
font-weight: 300;
margin-top: 10px;
`
    
const Title2 = styled.div`
font-size: 20px;
width: 400px;
font-weight: 500;
`

const Div2 = styled.div`

`
const Rec2 = styled.div`
width: 2px;
height: 80px;
background-color: white;
`

const Rec1 = styled.div`
width: 2px;
height: 70px;
background-color: white;
`

const Circle = styled.div`
width: 60px;
height: 60px;
border: 1px solid white;
border-radius: 30px;
display: flex;
justify-content: center;
align-items: center;
font-size: 30px;
`
const Div1 = styled.div`
margin-right: 20px;
width: 60px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: -30px;
`

const Right = styled.div`
width: 55%;
height: 100%;
display: flex;
align-items: center;
margin-right: 3%;
`

const Texts = styled.div`
font-size: 20px;
width: 300px;
margin: 50px 0;
`

const Title = styled.div`
font-size: 40px;
width: 400px;
`

const Left = styled.div`
width: 45%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 3%;
`

const Card = styled.div`
display: flex;
color: white;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
background-color: rgba(35, 92, 92, 0.718);
`

const Container = styled.div`
  width: 100%;
  display: flex;
align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 600px;
`