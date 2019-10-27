import React from "react";
import styled from 'styled-components'
import {NavLink } from "react-router-dom";

export default function WorkersCard(props) {
  const {fullName,photoUrl,serviceType,id} = props.worker;
  let photoUrlTest ="https://avatars0.githubusercontent.com/u/50642099?s=400&u=203a21c32a0f3c3bba312c6e7c3bf73ef8f5a186&v=4"
  const DisplayCard = styled.div`

width:300px;
height:300px;
margin: 2% auto
color:white;
border-radius:15px;
border:1px solid darkblue;
// background-image: url(${photoUrl});
background-image: url(${photoUrlTest});
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
    
   
      
    <NavLink className="workersCard" to={`/workersdetail/${id}`}>
      <DisplayCard>
        
        
        <DisplayText>
        <h2>{fullName}</h2>
        <h3>{serviceType}</h3>
        </DisplayText>
    </DisplayCard>
    </NavLink>
    
      
  )
}