import React,{ useEffect, useState } from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
  CardFieldset,
  CardOptionsNote,
  CardButton,
} from "./WorkersDetailCard";
import {axiosWithAuth} from '../Utils/axiosWithAuth';
import Results from '../Components/Rating/Results';
function WorkersDetail(props) {
  const [worker, setWorker] = useState();
  let photoUrlTest ="https://avatars0.githubusercontent.com/u/50642099?s=400&u=203a21c32a0f3c3bba312c6e7c3bf73ef8f5a186&v=4"
  useEffect(() => {
    const id = Number(props.match.params.id);
   
    axiosWithAuth().get(`/serviceWorkers/${id}`)
      .then(res =>{
        
        setWorker(res.data)
      })
      .catch(err => console.log('Error: ', err));
    
  }, [props.match.params.id]);

  
  if (!worker) {
    return <p>Loading data...</p>
  }
  return (
    <div className="Details">
     <CardWrapper>
        <CardHeader>
          <CardHeading>Get To Know <b><i>{worker.fullName}</i></b></CardHeading>
        </CardHeader>
        <CardBody>
         <CardFieldset>         
           {/* <CardIcon src={worker.photoUrl} alt="emplyee picture"/>         */}
           <CardIcon src={photoUrlTest} alt="employee picture"/>       
         </CardFieldset>

          <CardFieldset>
            <CardOptionsNote><b>Years of Service:</b> {worker.timeAtJob}</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>{worker.serviceType}</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
            <CardOptionsNote>{worker.tagline}</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Add Tip</CardButton>
          </CardFieldset>
          <Results/>
         
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default WorkersDetail;