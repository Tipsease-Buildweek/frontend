import React from "react";
import Image from 'styled-components';
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsItem,
  CardOptions,
  CardOptionsNote,
  CardButton,
} from "./WorkersDetailCard";


function WorkersDetail() {
  return (
    <div className="Details">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Get To Know 'Kayla'</CardHeading>
          {/* <Image src = 'https://imgur.com/0MayGBG' /> */}
        </CardHeader>
           
        <CardBody>  
          <CardFieldset>
          <CardOptionsNote>Rating:</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Tenure:</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Role:</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Tagline:</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Bio:</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Send Tip</CardButton>
          </CardFieldset>
         
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default WorkersDetail;