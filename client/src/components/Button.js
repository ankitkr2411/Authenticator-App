import React from 'react'
import styled from 'styled-components'

const Button = ({text,event}) => {
  return (
    <Wrapper>
    <div className='btnBox' onClick={()=>event()}>
        {text}
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.btnBox{
  padding: 20px;
  background-color: #ffffff05;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  color: white;
  font-weight: bold;
  border-radius: 5px;
  margin: 10px;
}

.btnBox:hover{
    cursor:pointer;
    background-color:#ff7300;
}

.btnBox:active{
    background-color:#ff8e26;
}

`

export default Button
