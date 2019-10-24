import React, { useEffect, useState } from "react";

import {axiosWithAuth} from '../Utils/axiosWithAuth';
import styled,{keyframes} from 'styled-components';

import WorkersCard from './WorkersCard';


const Container = styled.div`
background-color:lightcyan;
`
const ListCards = styled.div`
width: 98%;
height: 100%;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
margin: 2% auto;


`;

const SearchName = styled.div`
width: 180px;
height: 28px;
margin-top:4%
margin-left:2%;
padding:10px;

`

const animationHeader = keyframes`

from {
  width:0;
}         
to {
  width:20ch;
}  
  
`


const PageHeader = styled.h1`

 
  color: lightgray;
  font-size:3rem;
  text-align: center;
  
  text-shadow: 3px 3px 3px darkblue,
                3px 3px 3px darkblue, 
                3px 3px 3px  darkblue;
  
  animation:${animationHeader}   2s steps(18) ;
  overflow:hidden
  white-space: nowrap;
  @media (max-width: 500px) {
    font-size:1.4rem;
    margin-top:40px;
  }
  
` 



const Header = styled.div`
display:flex;
justify-content:space-evenly;

`

const LoadingError=styled.p`
margin:100px
`


export default function WorkersList() {
  const [workerList, setWorkerList] = useState([]);
  const [workerSearch, setWorkerSearch] = useState('');

  useEffect(() => {
    axiosWithAuth().get('/serviceWorkers')
      .then(res =>{
        
        setWorkerList(res.data)
      })
      .catch(err => console.log('Error: ', err));
    
  }, []);

  if (!workerList) {
    return <LoadingError>Loading data...</LoadingError>
  }
  
  const searchOnChange = (e) => {
    setWorkerSearch(e.target.value);
  }
  let filteredList = workerList.filter(worker =>
    worker.fullName.toLowerCase().indexOf(workerSearch.toLowerCase()) !== -1)
  

  

  return (
    <Container>
      <Header>
        <PageHeader>Meet Our Employees</PageHeader>
        
      </Header>
      <SearchName>
          <input className="inputSearch"
            type="text"
            placeholder="Search Employee..." 
            value={workerSearch}
            onChange={searchOnChange}
          
          />
        </SearchName>
      <ListCards>      
        {filteredList.map((worker) => 
          
           <WorkersCard worker={worker} key={worker.id}/>
           
           )}
        
      </ListCards>
    
    </Container>
  );
}