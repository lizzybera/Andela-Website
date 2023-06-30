import React from 'react'
import styled from 'styled-components'
import {FcCheckmark} from "react-icons/fc"
import img from "../../assets/shutterstock_1660490494-1024x683.jpeg"
import img2 from "../../assets/shutterstock_1696088776-1024x683.jpeg"
import img3 from "../../assets/shutterstock_1653288229-1024x683.jpeg"

const FindWhat = () => {
  return (
    <div>
        <Container>
            <Main>
                <Title><i>Find</i> what you’re looking for and more</Title>
                <MainDiv>
                <Div>
                    <Pics src={img} mr='none'/>
                    <Write>
                    <Big ml='45px'>Grow your career with us</Big>
                    <List ml='45px'>
                    <Li> <Icon><FcCheckmark /></Icon>   Find meaningful, long-term work with interesting organizations</Li>
                    <Li> <Icon><FcCheckmark /></Icon> Work with an internationally distributed team and company</Li>
                    <Li> <Icon><FcCheckmark /></Icon>Gain additional skills through exclusive learning opportunities</Li>
                    <Li> <Icon><FcCheckmark /></Icon>Network with other technologists to develop your expertise</Li>
                </List>
                    </Write>
                </Div>
                <Div>
                    <Write>
                    <Big ml='none'>Set your own rate</Big>
                    <List ml='none'>
                        <Li> <Icon><FcCheckmark /></Icon>Only work with companies we trust</Li>
                    <Li> <Icon><FcCheckmark /></Icon>Receive payments on time in your local currency, USD, or in Crypto</Li>
                    <Li> <Icon><FcCheckmark /></Icon>Discover salaries that match your skills and experiences</Li>
                </List>
                    </Write>
        <Pics src={img2} mr='none'/>
                </Div>
                <Div>
                    <Pics src={img3} mr='none'/>
                    <Write>
                    <Big ml='45px'>Work anytime, anywhere</Big>
                    <List ml='45px'>
                    <Li> <Icon><FcCheckmark /></Icon>Ditch the commute and work from anywhere</Li>
                    <Li> <Icon><FcCheckmark /></Icon> With roles across different time zones, you choose when you work</Li>
                    <Li> <Icon><FcCheckmark /></Icon>Create a healthy, flexible work-life balance</Li>
                </List>
                    </Write>
                </Div>
                </MainDiv>
            </Main>
        </Container>
    </div>
  )
}

export default FindWhat

const Icon = styled.div`
margin-right: 15px;
/* font-size: 25px; */
`

const Li = styled.div`
display: flex;
margin-top: 10px;
font-weight: 300;
`

const List = styled.div<{ml: string}>`
margin-top: 20px;
margin-bottom: 30px;
font-size: 20px;
margin-left: ${({ml})=>ml};
`

const Big = styled.div<{ml: string}>`
font-size: 30px;
font-weight: 400;
margin-left: ${({ml})=>ml};
/* margin-top: -9px; */
`

const  Write = styled.div`
width: 54%;
`

const  Pics = styled.img<{mr: string}>`
width: 48%;
height: 450px;
margin-right: ${({mr})=>mr};
object-fit: cover;
background-color: gray;
`

const  Div = styled.div`
display: flex;
/* flex-direction: column; */
width: 100%;
height: 100%;
margin-top: 20px;
`

const  MainDiv = styled.div`
width: 100%;
margin-top: 30px;
display: flex;
flex-direction: column;
`

const  Title = styled.div`
font-size: 40px;
`

const  Main = styled.div`
width: 95%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const  Container = styled.div`
width: 100%;
min-height: 900px;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
`