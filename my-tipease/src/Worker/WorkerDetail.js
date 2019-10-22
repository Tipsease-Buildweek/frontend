import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardFieldset,
  CardOptionsNote,
  CardButton,

} from "./Card";

function WorkerDetail() {
  return (
    <div className="Card">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Meet 'Kayla'</CardHeading>
        </CardHeader>

        <CardBody>
        <CardFieldset>
          <CardOptionsNote>Role:</CardOptionsNote>
          
          </CardFieldset>
          <CardFieldset>
          <CardOptionsNote>Tenure:</CardOptionsNote>
          
          </CardFieldset>
          <CardFieldset>
          <CardOptionsNote>Tagline:</CardOptionsNote>
          
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Rating</CardOptionsNote>
          
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Add Tip</CardButton>
          </CardFieldset>

        
        </CardBody>
      </CardWrapper>
    </div>
  );
}

export default WorkerDetail;