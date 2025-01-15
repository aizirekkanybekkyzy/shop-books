import React, { Fragment, useState } from "react";
import Compon from "./components/Compon";
import styled from "styled-components";

function App() {
 
  const [user , setUser] = useState([])
  
  const getSumma =(phone)=>{
    setUser(phone)
  }

  return (
     <StyledDiv>
    <Compon Summa={getSumma}/>
     {user.map((el)=>(
    <Fragment key={el.id}>
     <h2>ID :{el.id}</h2>
     <h2>Name :{el.Name}</h2>
     <h2>Model :{el.model}</h2>
     <h2>Momory :{el.memory}</h2>
     <h2>Price :{el.price}</h2>
     <h2>Manufacture :{el.manufacture}</h2>
     <hr/>
     </Fragment>
     ))}
     </StyledDiv>
 );
 
}
export default App;

const StyledDiv = styled.div`
   border: 1px solid;
   width : 500px;
   margin :auto;
   text-align : center;
   background-color : greenyellow;
   border-radius : 10px;
   color : green;
   border: none;
`