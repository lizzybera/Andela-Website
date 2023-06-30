import React from 'react'
import styled from 'styled-components'
import Button from '../static/Button'

const NearFooter2 = () => {
  return (
    <div>
        <Container>
            <Main>
                <Title>Your skills are in <i>demand</i></Title>
                <Text>The future is yours to create.</Text>
                <Down>
                    <Div>
                        <Button2>Phyton</Button2>
                        <Button2>React Native</Button2>
                        <Button2>Javascript</Button2>
                        <Button2>Golang</Button2>
                        <Button2>Salesforce</Button2>
                    </Div>
                    <Div>
                        <Button2>Node.js</Button2>
                        <Button2>vue.js</Button2>
                        <Button2>Ruby</Button2>
                        <Button2>Data Scientists</Button2>
                        <Button2>Java</Button2>
                    </Div>
                    <Div>
                        <Button2>Kotlin</Button2>
                        <Button2>PHP</Button2>
                        <Button2>C#</Button2>
                        <Button2>React.js</Button2>
                        <Button2>Django</Button2>
                    </Div>
                    <Div>
                        <Button2>Flask</Button2>
                        <Button2>Android</Button2>
                        <Button2>DevOps</Button2>
                        <Button2>Swift</Button2>
                    </Div>
                </Down>
                <Button 
                    text='Apply to the Andela Talent Network'
                    width='400px'
                    height='60px'
                    br='30px'
                    weight='500'
                    b='1px solid black'
                    mr='35px'
                    fs='17px'
                    />
            </Main>
        </Container>
    </div>
  )
}

export default NearFooter2

const Button2 = styled.div`
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
margin-bottom: 30px;
`
const Title = styled.div`
font-size: 40px;
font-weight: 400;
`
const Text = styled.div`
font-weight: 300;
font-size: 18px;
margin-bottom: 20px;
margin-top: 15px;
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
    min-height: 500px;
    display: flex;
    justify-content: center;
    background-color: #EDEFF1;
    padding-top: 40px;
`