import React from 'react'
import styled from 'styled-components'
import img from "../../assets/Andela_NewLogos.png"
import Button from '../static/Button'

const BuildYourTeam = () => {
  return (
    <div>
        <Container>
            <Left>
                <Pics src={img} />
            </Left>
            <Right>
                <Small>Build your team today</Small>
                <Big>We’ve cracked the code on creating engineering teams</Big>
                <Text>Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Start building your world-class team faster with talent from Andela.</Text>
                <Button 
                    text='Build your team'
                    width='200px'
                    height='65px'
                    br='40px'
                    bg='#56C870'
                    mr='10px'
                    fs='20px'
                    />
            </Right>
        </Container>
    </div>
  )
}

export default BuildYourTeam

const Text = styled.div`
font-size: 18px;
font-weight: 300;
margin-top: 30px;
margin-bottom: 30px;
line-height: 1.8;
`

const Big = styled.div`
font-size: 45px;
font-weight: 400;
`
const Small = styled.div`
font-size: 15px;
font-weight: 500;
color: black;
`
const Right = styled.div`
/* background-color: green; */
display: flex;
flex-direction: column;
justify-content: center;
/* align-items: center; */
width: 53%;
`

const Pics = styled.img`
object-fit: contain;
width: 500px;
height: 700px;
margin-left: 35px ;
`

const Left = styled.div`
width: 47%;
height: 100%;
display: flex;
align-items: center;
/* background-color: gray; */
`

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
`