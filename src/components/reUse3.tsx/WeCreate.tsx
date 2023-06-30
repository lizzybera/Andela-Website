import React from 'react'
import styled from 'styled-components'
import Card4 from '../static/Card4'

const WeCreate = () => {
  return (
    <div>
        <Container>
            <Main>
                <Title>We create winning teams.</Title>
                <Text>We help you source, evaluate, and hire specialized talent compliant with local laws in 100 countries</Text>
                <CardHolder>
                <Card4 
                name='Source'
                des='We’ll work with you to fully understand your technical gaps, culture, industry regulations, and strategic route. Instantly view a curated selection of technologist profiles that meet your needs'
                />
                <Card4 
                name='Assess'
                des='Our proprietary assessments are designed to find you the best talent by role, no matter where they are in the world. Based on your team’s goals, meet vetted technologists you can trust.'
                />
                <Card4 
                name='Match'
                des='Connect within hours, with vetted technologists who can easily align with your existing teams, tools, and workflows. Our matching times are consistently twice as fast compared to industry standards'
                />
                <Card4 
                name='Delivery'
                des='With a focus on sustainable growth, we’re with you every step of the way. From rapid onboarding and seamless integration to global payroll solutions and compliance support'
                />
                </CardHolder>
            </Main>
        </Container>
    </div>
  )
}

export default WeCreate

const CardHolder = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
margin-top: 10px;
`

const Text = styled.div`
margin: 18px 0;
font-size: 20px;
font-weight: 300;
`

const Title = styled.div`
font-size: 40px;
`

const Main = styled.div`
width: 95%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Container = styled.div`
display: flex;
justify-content: center;
    background-color: #F8F8F8;
    width: 100%;
    min-height: 400px;
    padding: 30px 0;
`