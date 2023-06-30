import React from 'react'
import styled from 'styled-components'
import {FcCheckmark} from "react-icons/fc"
import Button from '../static/Button'
import img from "../../assets/Visual-3.png"

const EmpowerYour = () => {
  return (
    <div>
        <Container>
            <Left>
                <Small>Empower your future</Small>
                <Big>Why <i>the world’s best <br/>
talent</i> prefers Andela</Big>
                <List>
                    <Li> <Icon><FcCheckmark /></Icon>   Long-term placements</Li>
                    <Li> <Icon><FcCheckmark /></Icon> Trusted career partner</Li>
                    <Li> <Icon><FcCheckmark /></Icon> Career Guidance</Li>
                    <Li> <Icon><FcCheckmark /></Icon> 96% match success</Li>
                </List>
                <Button 
                    text='Find Tech Experts'
                    width='230px'
                    height='65px'
                    br='40px'
                    bg='#56C870'
                    mr='10px'
                    fs='20px'
                    />
            </Left>

            <Right>
            <Pics src={img} />
            </Right>
        </Container>
    </div>
  )
}



export default EmpowerYour

const Pics = styled.img`
object-fit: contain;
width: 900px;
height: 500px;
/* margin-left: 35px ; */
margin-top: 70px;
`

const Right = styled.div`
height: 100%;
width: 60%;
/* background-color: yellow; */
display: flex;
align-items: center;
`

const Icon = styled.div`
margin-right: 15px;
/* font-size: 25px; */
`

const Li = styled.div`
display: flex;
margin-top: 10px;
font-weight: 300;
`

const List = styled.div`
margin-top: 20px;
margin-bottom: 30px;
font-size: 20px;
`

const Big = styled.div`
font-size:40px;
font-weight: 400;
`

const Small = styled.div`
font-size: 15px;
font-weight: 500;
color: black;
`

const Left = styled.div`
height: 100%;
width: 40%;
display: flex;
justify-content: center;
flex-direction: column;
margin-left: 35px;
`

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 600px;
`