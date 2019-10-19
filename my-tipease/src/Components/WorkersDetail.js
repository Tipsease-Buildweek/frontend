import React from "react";
import {
  CardWrapper,
  CardHeader,
  CardHeading,
  CardBody,
  CardIcon,
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
        </CardHeader>

        <CardBody>
        <CardFieldset>
          <CardIcon>PHOTO</CardIcon>
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Tenure</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Role</CardOptionsNote>
          </CardFieldset>

          <CardFieldset>
          <CardOptionsNote>Tagline</CardOptionsNote>
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