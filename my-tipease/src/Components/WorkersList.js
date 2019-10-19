import React, { useEffect, useState } from "react";
import WorkersCard from './WorkersCard';
import axios from 'axios';
import styled from 'styled-components'
import data from '../data.js'

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
background-color: lightgrey;
color: blue;

margin-top:4%
padding:10px;

`
const PageHeader = styled.h1`
color:darkblue;
font-size:3rem;
text-align:left;
`    
    
const Header = styled.div`
display:flex;
justify-content:space-evenly;

`

    
    


export default function WorkersList() {
  const [workerList, setWorkerList] = useState([]);
  const [workerSearch, setWorkerSearch] = useState('');

  useEffect(() => {
    // axios.get('https://build-tipsease.herokuapp.com/serviceWorkers')
    //   .then(res =>{
        
    //     setWorkerList(res.data.results)
    //   })
    //   .catch(err => console.log('Error: ', err));
     setWorkerList(data);
  }, []);

  if (!workerList) {
    return <p>Loading data...</p>
  }
  console.log(workerList)
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
      
      <span><i class="fa fa-search"></i></span>
      
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
           <WorkersCard worker={worker} key={worker.id}/>)}
        
      </ListCards>
    
    </Container>
  );
}