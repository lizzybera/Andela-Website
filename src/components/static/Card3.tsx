import React from 'react'
import styled from 'styled-components'
import img from "../../assets/circle-accent-purple.svg"

const Card3 = () => {
  return (
    <div>
        <Container>
            <Left>
                <Des>Case Studies</Des>
                <Name>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</Name>
                <Button>
                    Learn More
                </Button>
            </Left>
            <Right>
                <Pics src={img}/>
            </Right>
        </Container>
    </div>
  )
}

export default Card3

const Pics = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
background-color: #4A1476;
`
const Button = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 40px;
border: 1px solid white;
border-radius: 25px;
font-size: 18px;
`
const Right = styled.div`
width: 50%;
height: 350px;
background-color: white;
border-radius: 10px;
`

const Name = styled.div`
font-weight: 700;
margin-top: 20px;
margin-bottom: 20px;
font-size: 20px;
width: 350px;
`
const Des = styled.i`
font-size: 18px;
`

const Left = styled.div`
width: 50%;
height: 350px;
background-color: #4A1476;
text-align: left;
margin-left: 25px;
display: flex;
flex-direction: column;
justify-content: center;
color: white;
`
const Container = styled.div`
width: 720px;
height: 350px;
display: flex;
align-items: center;
background-color: #4A1476;
border-radius: 10px;
margin-left: 30px;
border: 1px solid purple;
`