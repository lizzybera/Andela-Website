import React from 'react'
import styled from 'styled-components'
import img from "../../assets/andela-commmunity-video-profile-play.jpg"


const OurVibrant = () => {
  return (
    <div>
        <Container>
        <Title>Our <i>vibrant</i> community
    </Title>
    <Text>Rizwan Jafri shares his Andela story from Lahore, Pakistan.</Text>
    <Box src={img}/>
        </Container>
    </div>
  )
}

export default OurVibrant

const Box = styled.img`
width: 800px;
height: 450px;
background-color: red;
/* object-fit: contain; */
`

const Text = styled.div`
font-size: 20px;
font-weight: 300;
line-height: 1.5;
margin-top: 20px;
margin-bottom: 50px;
`

const Title = styled.div`
font-size: 40px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 600px;
    width: 100%;
    text-align: center;
    padding: 90px 0;
    background-color: #173B3F;
    color: white;
`