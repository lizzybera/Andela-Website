import React from 'react'
import styled from 'styled-components'
import img from "../../assets/logo white.png"
import {BsFacebook, BsTwitter,
BsGithub, BsInstagram, BsYoutube, BsLinkedin, BsChatHeart, BsLaptop } from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <Container>
        <Main>
          <MainDiv>
            <Logo src={img}/>
            <IconHolder>
              <Icon><BsFacebook /> </Icon>
              <Icon><BsTwitter /> </Icon>
              <Icon><BsGithub /></Icon>
              <Icon><BsInstagram /></Icon>
              <Icon><BsYoutube /></Icon>
              <Icon><BsLinkedin /></Icon>
            </IconHolder>
            <IconHolder2>
              <Icon2><BsChatHeart /> </Icon2>
              <Icon2><BsLaptop /> </Icon2>
            </IconHolder2>
            <Text>© 2023 Andela. All rights reserved</Text>
          </MainDiv>
          <Div>
            <Head>Discover Talent</Head>
            <Texts>For Companies</Texts>
            <Texts>Enterprise</Texts>
            <Texts>Case studies</Texts>
          </Div>
          <Div>
            <Head>Find Work</Head>
            <Texts>For Technologists</Texts>
            <Texts>Learning Community</Texts>
            <Texts>Leadership Program</Texts>
            <Texts>Resources</Texts>
          </Div>
            <Div>
              <Head>Andela</Head>
              <Texts>About us</Texts>
              <Texts>Events</Texts>
              <Texts>Blog</Texts>
              <Texts>Press Center</Texts>
              <Texts>Careers</Texts>
            </Div>
            <Div>
              <Texts>Privacy Policy</Texts>
              <Texts>Terms and Conditions</Texts>
              <Texts>Modern Slavery Statement</Texts>
              <Texts>Accessibility Statement</Texts>
            </Div>
        </Main>
      </Container>
    </div>
  )
}

export default Footer

const Texts = styled.div`
font-size: 13px;
margin-top: 10px;
`

const Head = styled.div`
font-weight: 500;
font-size: 15px;
margin-bottom: 10px;
`

const Div = styled.div`
cursor: pointer;
margin-top: 50px;
`

const Text = styled.div`
font-size: 12px;
margin-top: 100px;
`

const IconHolder2 = styled.div`
display: flex;
margin-top: 15px;
`
const Icon2 = styled.div`
font-size: 25px;
`
const Icon = styled.div`
font-size: 25px;
margin-right: 20px;
`
const IconHolder = styled.div`
display: flex;
margin-top: 60px;
`

const Logo = styled.img`
height: 50px;
width: 200px;
/* object-fit: cover; */
`

const MainDiv = styled.div`
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
`

const Main = styled.div`
width: 95%;
height: 100%;
display: flex;
  justify-content: space-between;
`
const Container = styled.div`
  width: 100%;
  height: 450px;
  color: green;
  background-color: #173B3F;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`