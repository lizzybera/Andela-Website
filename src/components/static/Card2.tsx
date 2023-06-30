import React from 'react'
import styled from 'styled-components'

interface iCard2{
  t1?: string;
  t2?: string;
  t3?: string;
}

const Card2: React.FC<iCard2> = ({t1, t2, t3}) => {
  return (
    <div>
      <Container>
          <i>
          <T1> {t1} </T1>
          <T2> {t2}</T2>
          <T2> {t3}</T2>
          </i>
      </Container>
    </div>
  )
}

export default Card2

const T2 = styled.div`
font-weight: 300;
font-size: 20px;
text-align: center;
`

const T1 = styled.div`
font-size: 50px;
font-weight: 400;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 270px;
  margin: 15px 15px;
  background-color: #B0D6CE;
  border-radius: 10px;
`