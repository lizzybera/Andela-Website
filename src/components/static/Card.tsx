import React from 'react'
import styled from 'styled-components'
import img from "../../assets/Adeyinka-Alabi-2-Talent-homepage-150x150.jpg"

const Card = () => {
  return (
    <div>
        <Container>
            <Up>
              <Pics src={img}/>
              <Div>
                <Name>Adeyni</Name>
                <Des>Nigeria</Des>
              </Div>
            </Up>
            <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde sapiente cupiditate quibusdam iste id dicta facere eum a repellat non, recusandae iusto distinctio excepturi harum cum mollitia vero reiciendis aut?</Text>
        </Container>
    </div>
  )
}

export default Card

const Text = styled.div`
text-align: left;
margin-top: 20px;
`
const Des = styled.div``

const Name = styled.div`
font-weight: 700;
`

const Div = styled.div``

const Pics = styled.img`
width: 50px;
height: 50px;
border-radius: 25px;
background-color: red;
margin-right: 20px;
object-fit: cover;
`

const Up = styled.div`
display: flex;
width: 100%;
font-size: 17px;
`

const Container = styled.div`
width: 220px;
height: 220px;
flex-direction: column;
background-color: #EBE0FF;
display: flex;
/* align-items: center; */
justify-content: center;
padding: 30px 20px;
border-radius: 10px;
margin-left: 30px;
`