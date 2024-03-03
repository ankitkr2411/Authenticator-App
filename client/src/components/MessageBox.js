import React from 'react'
import { RxCross2 } from "react-icons/rx";
import styled from 'styled-components';
const MessageBox = ({mess,setmess}) => {
  return (
    <Wrapper>
    <div className='messMainBox'>
        
        <div className='messageBox'>
        <span className='cross' onClick={()=>{setmess({text:"",show:false})}}><RxCross2 /></span>{mess.text}</div>
      
    </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`

.messMainBox{
    position:absolute;
    top:0px;
    left:0px;
    z-index:99;
    width:100%;
    height:100vh;
    display:flex;
    justify-content: center;
    align-items:start;
    background-color:rgb(0 0 0 / 56%);
}

.messageBox{
    position: relative;
    padding: 20px;
    background-color: #b75959;
    font-weight: bold;
    color: white;
    border-radius: 9px;
    margin-top:50px;
}

.cross{
    position: absolute;
    top: 0;
    right: -18px;
}

.cross:hover{
    cursor:pointer;
}


`

export default MessageBox
