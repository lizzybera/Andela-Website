import React from 'react'
import styled from 'styled-components'

interface iButton {
    text?: string;
    width?: string;
    height?: string;
    weight?: string;
    bg?: string;
    br?: string;
    fs?: string;
    mr?: string;
    b?: string;
}

const Button:React.FC<iButton> = ({text,width, height, weight, br, bg, mr, fs, b}) => {
  return (
    <div>
        <Buttons width={`${width}`} weight={`${weight}`} br={`${br}`} mr={`${mr}`} height={`${height}`} bg={`${bg}`} fs={`${fs}`} b={`${b}`} >{text} </Buttons>
    </div>
  )
}

export default Button

const Buttons = styled.div<{width: string,weight: string,br: string, height: string, bg: string, mr: string, fs: string, b: string}>`
width: ${({width})=>width};
background-color: ${({bg})=>bg};
height: ${({height})=>height};
display: flex;
justify-content: center;
align-items: center;
border: ${({b})=>b};
border-radius: ${({br})=>br};
color: black;
font-weight: ${({weight})=>weight};
margin-right: ${({mr})=>mr};
transition: all 300ms;
font-size: ${({fs})=>fs};

:hover{
    transform: scale(1.1);
}
`