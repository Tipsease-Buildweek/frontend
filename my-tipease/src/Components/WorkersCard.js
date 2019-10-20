import React from "react";
import styled from 'styled-components'




export default function WorkersCard(props) {
  const {fullName,photoUrl,serviceType,id} = props.worker

  const DisplayCard = styled.div`

width:40%;
margin: 2% auto
color:darkblue;
border:1px solid blue;
background-image: url(${photoUrl});
background-repeat: no-repeat;
background-size: cover;

`;
  
  return (
    
   
      
      
      <DisplayCard>
      
          <h2>id:{id}</h2>
        <h2>{fullName}</h2>
        <h3>{serviceType}</h3>
        
      
    
    </DisplayCard>
    
      
  )
}