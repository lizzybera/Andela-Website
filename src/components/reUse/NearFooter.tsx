import React from 'react'
import styled from 'styled-components'

const NearFooter = () => {
  return (
    <div>
        <Container>
            <Main>
                <Text>Scale faster with Andela</Text>
                <Title>What skills will drive your vision?</Title>
                <Down>
                    <Div>
                        <Button>Phyton</Button>
                        <Button>React Native</Button>
                        <Button>Javascript</Button>
                        <Button>Golang</Button>
                        <Button>Salesforce</Button>
                    </Div>
                    <Div>
                        <Button>Node.js</Button>
                        <Button>vue.js</Button>
                        <Button>Ruby</Button>
                        <Button>Data Scientists</Button>
                        <Button>Java</Button>
                    </Div>
                    <Div>
                        <Button>Kotlin</Button>
                        <Button>PHP</Button>
                        <Button>C#</Button>
                        <Button>React.js</Button>
                        <Button>Django</Button>
                    </Div>
                    <Div>
                        <Button>Flask</Button>
                        <Button>Android</Button>
                        <Button>DevOps</Button>
                        <Button>Swift</Button>
                    </Div>
                </Down>
            </Main>
        </Container>
    </div>
  )
}

export default NearFooter

const Button = styled.div`
margin-top: 25px;
background-color: white;
width: 280px;
height: 47px;
font-size: 20px;
display: flex;
align-items: center;
border-radius: 25px;
padding-left: 20px;
transition: all 350ms;
cursor: pointer;

:hover{
    color: green;
    transform: scale(1.1);
}
`
const Div = styled.div``
const Down = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
const Title = styled.div`
font-size: 40px;
font-weight: 400;
`
const Text = styled.div`
font-weight: 500;
font-size: 18px;
`
const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
    width: 95%;
    height: 600px;
`

const Container = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: center;
    background-color: #EDEFF1;
    padding-top: 30px;
`