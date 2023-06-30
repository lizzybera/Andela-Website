import React from 'react'
import styled from 'styled-components'
import Card from '../static/Card'

const BrilliantMinds = () => {
  return (
    <div>
        <Container>
            <Title>
            <i>Brilliant minds</i> and <i>companies</i> <br />
come together to build the future
            </Title>
            <CardHolder>
            <Card />
            <Card />
            <Card />
            <Card />
            </CardHolder>
        </Container>
    </div>
  )
}

export default BrilliantMinds

const CardHolder = styled.div`
display: flex;
min-width: 90%;
margin: 0 10px;
`
const Title = styled.div`
font-size: 40px;
margin-bottom: 50px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 700px;
    width: 100%;
    text-align: center;
`