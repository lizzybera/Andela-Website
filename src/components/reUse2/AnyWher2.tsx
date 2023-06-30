import React from 'react'
import styled from 'styled-components'
import Card3 from '../static/Card3'


const Anywher2 = () => {
  return (
    <div>
        <Container>
        <Title>
        Insights to inspire
    </Title>
    <Text>
The latest articles from Andela.
    </Text>

    <CardHolder>
    <Card3 />
    </CardHolder>
        </Container>
    </div>
  )
}

export default Anywher2

const CardHolder = styled.div`
display: flex;
width: 100%;
justify-content: center;
margin-bottom: 30px;
`

const Text = styled.div`
font-size: 20px;
font-weight: 300;
line-height: 1.5;
margin-top: 20px;
margin-bottom: 60px;
`

const Title = styled.div`
font-size: 40px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 550px;
    width: 100%;
    text-align: center;
    padding: 90px 0;
`