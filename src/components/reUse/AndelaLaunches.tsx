import React from 'react'
import styled from 'styled-components'
import img from "../../assets/github-logo.svg"
import img2 from "../../assets/Kraft-Heinz-Logo.svg"
import img3 from "../../assets/coursera-logo.svg"
import img4 from "../../assets/Kraft-Heinz-Logo.svg"
import img5 from "../../assets/seismic-logo.svg"
import img6 from "../../assets/goldman-sachs-logo.svg"

const AndelaLaunches = () => {
  return (
    <div>
        <Container>
            <Main>
            <Up>Trusted by</Up>
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

export default AndelaLaunches

const Logo2 = styled.img`
height: 18px;
margin-top: 10px;
`
const Logo = styled.img`
height: 30px;
`

const Down = styled.div`
display: flex;
margin-top: 80px;
justify-content: space-between;
width: 100%;
`

const Up = styled.div`
font-size: 33px;
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
    height: 230px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E0F1EB;
    color: #01383D;
`