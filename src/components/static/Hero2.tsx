import React, { useState } from 'react'
import styled from 'styled-components'
import img from "../../assets/green-wash.jpeg"
import img2 from "../../assets/logo white.png"
import img3 from "../../assets/andela logo.svg"
import {BsChevronDown} from "react-icons/bs"
import Button from './Button'
import { NavLink } from 'react-router-dom'

const Hero2 = () => {

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

            <Title>Find work that you
love with <i>companies
you can trust</i></Title>

            <Text>Join the Andela Talent Network to experience the joy of long-term work, <br />
with vetted companies and competitive compensation.</Text>

            <ButtonWrapper>
                    <Button 
                    text='Apply to access exclusive jobs'
                    width='350px'
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

export default Hero2

const ButtonWrapper = styled.div`
display: flex;
margin-left: 35px;
margin-top: 50px;
`
const Text = styled.div`
font-size: 18px;
margin-top: 50px;
margin-left: 35px;
color: white;
`

const Title = styled.div`
font-size: 65px;
color: white;
margin-left: 35px;
line-height: 1.2;
margin-top: 5%;
width: 600px;
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
/* align-items: center; */
width: 100%;
background-color: rgba(45, 146, 139, 0.2);
`

const Container = styled.div`
  width: 100%;
  display: flex;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 700px;
  padding-top: 20px;
  background-attachment: fixed;
`