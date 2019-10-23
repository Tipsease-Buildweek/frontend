import React from "react";
import styled from 'styled-components'
import {NavLink } from "react-router-dom";

export default function WorkersCard(props) {
  const {fullName,photoUrl,serviceType,id} = props.worker

  const DisplayCard = styled.div`

width:300px;
height:300px;
margin: 2% auto
color:darkblue;
border:1px solid blue;
background-image: url(${photoUrl});
background-repeat: no-repeat;
background-size: cover;
`;

const DisplayText = styled.div`

margin-top: 200px;
text-align:left;  
line-height:1.5rem;
padding-left:5%;
`;
  
  return (
    
   
      
    <NavLink className="workersCard" to={`/WorkersDetail/${id}`}>
      <DisplayCard>
        
        
        <DisplayText>
        <h2>{fullName}</h2>
        <h3>{serviceType}</h3>
        </DisplayText>
    </DisplayCard>
    </NavLink>
    
      
  )
}