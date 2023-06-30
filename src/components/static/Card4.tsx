import React from 'react'
import styled from 'styled-components'

interface iCard4{
    name?: string;
    des?: string;
}

const Card4: React.FC<iCard4> = ({name, des}) => {
  return (
    <div>
        <Container>
            <Name>{name}</Name>
            <Des>{des}</Des>
        </Container>
    </div>
  )
}

export default Card4

const Des = styled.div`
font-size: 15px;
font-weight: 300;
margin-top: 10px;
`

const Name = styled.i`
font-size: 22px;
font-weight: 400;
margin: 20px 0;
`

const Container = styled.div`
display: flex;
flex-direction: column;
    width: 230px;
    height: 240px;
    border-radius: 10px;
    background-color: white;
    padding: 0px 40px;
`