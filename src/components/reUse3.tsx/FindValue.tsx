import React from 'react'
import styled from 'styled-components'
import img from "../../assets/section-image-3.jpeg"
import img2 from "../../assets/shutterstock_1910023657-1-1024x683.jpeg"
import img3 from "../../assets/shutterstock_1241581108.jpeg"

const FindValue = () => {
  return (
    <div>
        <Container>
            <Main>
                <Title>Let’s help you add value to your business</Title>
                <Text2>
Discover our global neighborhood of technologists.</Text2>
                <MainDiv>
                <Div>
                    <Write>
                    <Big ml='none'>Speed to match</Big>
                    <Text  ml='none'>Move faster without sacrificing quality. Our team can radically reduce the time it takes to hire talent so you can find the right fit, quickly.</Text>
                    </Write>
        <Pics src={img} mr='none'/>
                </Div>
                <Div>
                    <Pics src={img2} mr='none'/>
                    <Write>
                    <Big ml='75px'>Enterprise-ready</Big>
                    <Text ml='75px'>Technologists with verified backgrounds, aligned to your time zones, and compliant with your company’s security practices so you can focus on making an impact.</Text>
                    </Write>
                </Div>
                <Div>
                    <Write>
                    <Big ml='none'>Flexible teams</Big>
                    <Text  ml='none'>Find niche expertise for various project lengths. Onboard solo engineers to fill gaps or hire full teams to accelerate your build. Any team, any timezone, any skills.</Text>
                    </Write>
        <Pics src={img3} mr='none'/>
                </Div>
                </MainDiv>
            </Main>
        </Container>
    </div>
  )
}

export default FindValue

const Text = styled.div<{ml: string}>`
font-size: 20px;
font-weight: 300;
width: 620px;
line-height: 1.3;
margin-top: 20px;
margin-left: ${({ml})=>ml};
`

const Big = styled.div<{ml: string}>`
font-size: 40px;
font-weight: 400;
margin-left: ${({ml})=>ml};
`

const  Write = styled.div`
width: 54%;
`

const  Pics = styled.img<{mr: string}>`
width: 48%;
height: 350px;
margin-right: ${({mr})=>mr};
object-fit: cover;
background-color: gray;
`

const  Div = styled.div`
display: flex;
/* flex-direction: column; */
width: 100%;
height: 100%;
margin-top: 20px;
`

const  MainDiv = styled.div`
width: 100%;
margin-top: 30px;
display: flex;
flex-direction: column;
`

const  Text2 = styled.div`
font-size: 20px;
font-weight: 300;
margin-top: 15px;
`

const  Title = styled.div`
font-size: 40px;
`

const  Main = styled.div`
width: 95%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const  Container = styled.div`
width: 100%;
min-height: 900px;
display: flex;
justify-content: center;
align-items: center;
padding: 100px 0;
`