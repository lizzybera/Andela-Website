import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../assets/toby-osborn-ilHo9qgDEGY-unsplash-scaled.jpeg"
import img2 from "../../assets/logo white.png"
import img3 from "../../assets/andela logo.svg"
import {BsChevronDown} from "react-icons/bs"
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Hero3 = () => {

    const [show, setShow] = useState<boolean>(false)

    const changeColor =()=>{
        if(window.scrollY >=70){
            setShow(false)
        }else{
            setShow(true)
        }
    }

        window.addEventListener('scroll', changeColor)

  return (
    <div>
        <Container>
            <Card>
           {
            show?  <Up bg='none' c='white'>
            <Div to="/" >
            <Logo src={img2}/>
            </Div>

            <NavHolder>
                <Nav c='white' to="/tech">For Technology Experts</Nav>
                <Nav c='white' to="/">Business</Nav>
                <Nav c='white' to="/enterprise">Enterprise</Nav>
            </NavHolder>

            <ButtonHolder>
                <Nav c='white' to="/">Apply for Jobs</Nav>
                <Button 
                text='Hire Talent'
                width='150px'
                height='45px'
                br='25px'
                weight='500'
                bg='#56C870'
                mr='35px'
                fs='17px'
                />
                <Nav  c='white'to="/">Login   
                    <Icon><BsChevronDown /></Icon>
                </Nav>
            </ButtonHolder>
        </Up> :  <Up bg='white' c='#151515'>
                <Div to="/">
                <Logo src={img3}/>
                </Div>

                <NavHolder>
                    <Nav c='#151515' to="/tech">For Technology Experts</Nav>
                    <Nav c='#151515' to="/">Business</Nav>
                    <Nav c='#151515' to="/enterprise">Enterprise</Nav>
                </NavHolder>

                <ButtonHolder>
                    <Nav c='#151515' to="/">Apply for Jobs</Nav>
                    <Button 
                    text='Hire Talent'
                    width='150px'
                    height='45px'
                    br='25px'
                    weight='500'
                    bg='#56C870'
                    mr='35px'
                    fs='17px'
                    />
                    <Nav c='#151515' to="/">Login   
                        <Icon><BsChevronDown /></Icon>
                    </Nav>
                </ButtonHolder>
            </Up>
           }

            <Title>We’re here to help you build a world class team, today.</Title>

            <Text>Trusted by enterprise teams and growing startups alike, Andela’s onboarding times are 70% faster than the industry average.</Text>

            <ButtonWrapper>
                <Button 
                text='Schedule a Call'
                width='220px'
                height='65px'
                br='40px'
                bg='white'
                fs='20px'
                />      
                    <Button 
                    text='Watch an overview'
                    width='210px'
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

export default Hero3

const ButtonWrapper = styled.div`
display: flex;
justify-content: space-between;
margin-top: 50px;
/* background-color: yellow; */
width: 470px;
`
const Text = styled.div`
font-size: 20px;
margin-top: 60px;
margin-left: 35px;
color: white;
`

const Title = styled.div`
font-size: 38px;
color: white;
line-height: 1.2;
`
const Icon = styled.div`
margin-left: 10px;
margin-top: 5px;
font-size: 15px;
`

const ButtonHolder = styled.div`
display: flex;
margin-left: 100px;
justify-content: center;
align-items: center;
`
const Nav = styled(NavLink)<{c: string}>`
margin-right: 35px;
font-weight: 500;
font-size: 18px;
display: flex;
color:${({c})=>c};
text-decoration: none;
cursor: pointer;
`
const NavHolder = styled.div`
display: flex;
margin-left: 100px;
`
const Logo = styled.img`
height: 50px;
margin-left: 35px;
`
const Div = styled(NavLink)`
text-decoration: none;
cursor: pointer;
`
const Up = styled.div<{bg: string, c: string}>`
height: 70px;
margin-top: 10px;
display: flex;
color: ${({c})=>c};
align-items: center;
background-color: ${({bg})=>bg};
position:fixed;
top: 50px;
width: 100%;
transition: all 400ms;
z-index: 1;
`
const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
background-color: rgba(7, 43, 40, 0.604);
`

const Container = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  height: 700px;
`