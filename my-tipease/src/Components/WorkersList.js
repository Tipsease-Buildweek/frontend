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
padding:10px;

`

const animationHeader = keyframes`
0%{		color: red;	}
50%{	color: green;	}
99%{	color:white;	}
100%{	color: gray;	}

  
`


const PageHeader = styled.h1`
color:lightgray;
font-size:3rem;
text-align:left;
animation: ${animationHeader} 1s infinite;
text-shadow: 10px 3px 3px navy,
                3px 3px 3px navy, 
                3px 3px 3px  navy;
                
`    
    
const Header = styled.div`
display:flex;
justify-content:space-evenly;

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
    return <p><br></br><br></br>Loading data...</p>
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
        <SearchName>
          <input className="inputSearch"
            type="text"
            placeholder="Search Employee..." 
            value={workerSearch}
            onChange={searchOnChange}
          
          />
        </SearchName>
      </Header>
      <ListCards>      
        {filteredList.map((worker) => 
          
           <WorkersCard worker={worker} key={worker.id}/>
           
           )}
        
      </ListCards>
    
    </Container>
  );
}