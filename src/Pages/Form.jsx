import React from "react";

import Container from "@material-ui/core/Container";
import { FormCard, TitleCard } from "../Components/Card";
import { QuestionPage } from "./QuestionPage";
import { useParams } from "react-router";
import { Button } from "@material-ui/core";
import { useNavigate  } from "react-router";

export const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate ()
  return (
    <>
      <div style={{ marginTop: "10px" }}></div>
      <Button style={{ marginTop: "10px" }} onClick={()=> navigate("/") }> Go Back</Button>
      <Container maxWidth="md">
        {id ? (
          <>
            <TitleCard  id={id} />
            <QuestionPage id={id} />
            <FormCard id={id}/>
          </>
        ) : (
          <>
            <TitleCard />
            <QuestionPage id={id} />
            <FormCard />
          </>
        )}
      </Container>
    </>
  );
};
