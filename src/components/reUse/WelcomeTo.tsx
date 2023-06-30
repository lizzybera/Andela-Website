import React from 'react'
import styled from 'styled-components'
import Card2 from '../static/Card2'
import Button from '../static/Button'

const WelcomeTo = () => {
  return (
    <div>  
        <Container>
        <Title>Welcome to the future of <br />
<i>meaningful, sustainable work</i>
    </Title>
    <Text>
    We believe that the sum is greater than our parts – our impact can be seen globally. We specialize in helping our highly-skilled, global technology <br />talent community in emerging markets, connect with hundreds of leading companies
    </Text>

    <CardHolder>
    <Card2 
    t1='110 + '
    t2='Countries represented'
    t3=' on
    6 continents '
    />
    <Card2 
    t1=' 96%'
    t2='Successful placements'
    />
    <Card2 
     t1=' 84%'
     t2='Increased income for Andelans'
    />
    <Card2 
     t1=' 175,000+'
     t2='Technologists represented'
    />
    <Card2 
     t1='18+'
     t2='  Months'
     t3=' Average engagement '
    />
    </CardHolder>
    <ButtonHolder>
                     <Button 
                    text='Apply for Remote Jobs'
                    width='250px'
                    height='65px'
                    br='40px'
                    b='1px solid black'
                    mr='10px'
                    fs='20px'
                    />
                    <Button 
                    text='Hire Talent
                    '
                    width='150px'
                    height='65px'
                    br='40px'
                    bg='#56C870'
                    mr='10px'
                    fs='20px'
                    />
    </ButtonHolder>
        </Container>
    </div>
  )
}

export default WelcomeTo

const ButtonHolder = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
margin-bottom: 20px;
`
const CardHolder = styled.div`
display: flex;
justify-content: center;
min-height: 500px;
flex-wrap: wrap;
`

const Text = styled.div`
font-size: 20px;
font-weight: 300;
line-height: 1.5;
margin-top: 20px;
`

const Title = styled.div`
font-size: 40px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: green; */
    min-height: 500px;
    width: 100%;
    text-align: center;
`