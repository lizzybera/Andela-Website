import React from 'react'
import styled from 'styled-components'
import Card3 from '../static/Card3'
import Button from '../static/Button'


const Anywher = () => {
  return (
    <div>
        <Container>
        <Title>
        <i>Anytime, anywhere</i> – with Andela,<br />
the future of work is here
    </Title>
    <Text>
    Discover how leading companies have built impactful global teams with Andela
    </Text>

    <CardHolder>
    <Card3 />
    </CardHolder>
    <Button 
                    text='All case studies'
                    width='230px'
                    height='65px'
                    br='40px'
                    b='1px solid black'
                    mr='10px'
                    fs='20px'
                    />
        </Container>
    </div>
  )
}

export default Anywher

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
    min-height: 600px;
    width: 100%;
    text-align: center;
    padding: 90px 0;
`