import React from 'react'
import styled from 'styled-components'
import Button from '../static/Button'

const AfterHero = () => {
  return (
    <div>
        <Container>
            <Text>Andela Launches New Platform <br/>
to <i>Power the Future</i> of Customized Work</Text>
                        <Button 
                        text='find out more'
                        width='200px'
                        height='65px'
                        br='40px'
                        bg='#56C870'
                        fs='20px'
                        />
        </Container>
    </div>
  )
}

export default AfterHero

const Text = styled.div`
color: white;
font-size: 30px;
margin-left: 35px;
margin-right: 350px;
`
const Container = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    height: 160px;
    background-color: #173B3F;
    width: 100%;
`