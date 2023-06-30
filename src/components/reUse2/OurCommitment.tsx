import React from 'react'
import styled from 'styled-components'

const OurCommitment = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                    <Title>Our commitment to 
<i> your success</i></Title>
                </Left>
                <Right>
                    <Title2>Technologist first culture.</Title2>
                    <Text>Ensuring a seamless experience for technologists is our top priority. You can rest assured there is always someone looking out for your interests and career</Text>
<br />
                    <Title2>Trusted platform</Title2>
                    <Text>We only work with trusted and vetted companies. No matter what, we’ll ensure you are paid for the work you do, and on time.</Text>
                    <br />
                    <Title2>Global support</Title2>
                    <Text>Wherever you are, and whatever issues you may face, we’re here to help solve any disputes, fast!</Text>
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default OurCommitment


const Text = styled.div`
font-size: 20px;
font-weight: 300;
margin-top: 10px;
`
    
const Title2 = styled.div`
font-size: 35px;
width: 400px;
`

const Right = styled.div`
/* background-color: yellow; */
width: 50%;
height: 100%;
`

const Title = styled.div`
font-size: 40px;
width: 400px;
`

const Left = styled.div`
/* background-color: green; */
width: 50%;
height: 100%;
`
const Main = styled.div`
width: 95%;
height: 1005;
display: flex;
`

const Container = styled.div`
width: 100%;
min-height: 400px;
display: flex;
justify-content: center;
padding-top: 70px;
`