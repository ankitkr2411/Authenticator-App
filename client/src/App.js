import styled from "styled-components";
import Button from "./components/Button";
import { GlobalStyle } from "./GlobalStyle";
import { useState } from "react";
import MessageBox from "./components/MessageBox";
import background from "./public/images/background.jpg"


function App() {

  const [mess,setmess]=useState({
    text:"",
    show:false
  })
 
const genToken = async ()=>{  
  try{

  

    const res = await fetch("http://localhost:5000/generate",{ 
      method:"POST",
      headers:{ 
        Accept:"application/json",  
      },
      credentials:"include",
    })   

    const data = await res.json();


    if(res.status === 200)
    {
      setmess({text:"Token Generated",show:true});
    }
    else{
      setmess({text:"Something Went Wrong",show:true});
    }
  }
  catch(err)
  {
    setmess({text:"Something Went Wrong",show:true});
  }




  } 



  const verifyToken = async ()=>{

    try{

    

    const res = await fetch("http://localhost:5000/check",{ 
      method:"POST",
      headers:{ 
        Accept:"application/json",
        "Content-Type":"application/json"
      },
      credentials:'include',
  
    }) 


    if(res.status === 200)
    {
      setmess({text:"Verified",show:true});
    }
    else{
      setmess({text:"Session Expired or Can't Verified",show:true});
    }
  }
  catch(err)
  {
    setmess({text:"Something Went Wrong",show:true});
  }


  }



  return (
    <Wrapper background={background}>
    <GlobalStyle/>
    <div className="main">
    {mess.show?<MessageBox mess={mess} setmess={setmess}/>:""}
      <Button text="Generate Token" event={genToken}/>
      <Button text="Verify Token" event={verifyToken}/>
    </div>
    </Wrapper>
  );
}


const Wrapper= styled.section`

.main{
  background-image:url('${(props)=>props.background}');
  background-position: center;
  background-repeat:no-repeat;
  background-size: cover;
  background-color:rgba(0,0,0,0.2);
  height:100vh;
  width:100%;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

`

export default App;
