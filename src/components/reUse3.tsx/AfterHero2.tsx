import React from 'react'
import styled from 'styled-components'
import img from "../../assets/github-logo.svg"
import img2 from "../../assets/Kraft-Heinz-Logo.svg"
import img3 from "../../assets/coursera-logo.svg"
import img4 from "../../assets/Kraft-Heinz-Logo.svg"
import img5 from "../../assets/seismic-logo.svg"
import img6 from "../../assets/goldman-sachs-logo.svg"

const AfterHero2 = () => {
  return (
    <div>
        <Container>
            <Main>
            <Up>We’re <i>trusted</i> by the best</Up>
            <Down>
                <Logo src={img}/>
                <Logo src={img2}/>
                <Logo2 src={img3}/>
                <Logo2 src={img4}/>
                <Logo src={img5}/>
                <Logo src={img6}/>
            </Down>
            </Main>
        </Container>
    </div>
  )
}

export default AfterHero2

const Logo2 = styled.img`
height: 18px;
margin-top: 10px;
`
const Logo = styled.img`
height: 30px;
`

const Down = styled.div`
display: flex;
margin-top: 60px;
justify-content: space-between;
width: 100%;
`

const Up = styled.div`
font-size: 35px;
`
const Main = styled.div`
width: 80%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #B0D6CE;
    color: #01383D;
`