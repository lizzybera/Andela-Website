import React from 'react'
import styled from 'styled-components'
import img from "../../assets/shutterstock_1241581108.jpeg"
import Button from '../static/Button'

const BuildA = () => {

  return (
    <div>
        <Container>
            <Card>
            <Left>
                    <Title>Build a brilliant team quickly</Title>
                    <Texts>
Save time and energy with instant access to thousands of technologists around the world in three easy steps.</Texts>

                    <Button 
                    text='Build your dream team'
                    width='250px'
                    height='60px'
                    br='40px'
                    bg='#56C870'
                    mr='10px'
                    fs='20px'
                    />     
                    <Texts2>
                    Get the Enterprise advantage </Texts2>
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
                    <Title2>Smart skill matching</Title2>
                    <Text>Our intuitive machine learning and AI platform finds you the best match for any role.</Text>
<br />
<br />
                    <Title2>Meet the best talent</Title2>
                    <Text>Easily schedule interviews and connect with top technologists curated to fit your team’s needs.</Text>
                    <br />
                    <br />
                    <Title2>Continued excellence</Title2>
                    <Text>Integrate your new team members quickly and effectively. Let us manage payroll and compliance.</Text>
                    </Div2>
                </Right>
            </Card>
        </Container>
    </div>
  )
}

export default BuildA

const Text = styled.div`
font-size: 18px;
font-weight: 300;
margin-top: 10px;
`
    
const Title2 = styled.div`
font-size: 35px;
width: 400px;
font-weight: 400;
`

const Div2 = styled.div`

`
const Rec2 = styled.div`
width: 2px;
height: 85px;
background-color: white;
`

const Rec1 = styled.div`
width: 2px;
height: 70px;
background-color: white;
`

const Circle = styled.div`
width: 65px;
height: 65px;
border: 1px solid white;
border-radius: 33px;
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
width: 50%;
height: 100%;
display: flex;
align-items: center;
margin-right: 3%;
`

const Texts2 = styled.div`
font-size: 20px;
width: 300px;
margin-top: 10px;
`
const Texts = styled.div`
font-size: 19px;
width: 650px;
margin: 30px 0;
`

const Title = styled.div`
font-size: 60px;
width: 600px;
`

const Left = styled.div`
width: 50%;
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