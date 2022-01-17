import React from "react";

import Container from "@material-ui/core/Container";
import { FormCard, TitleCard } from "../Components/Card";
import { QuestionPage } from "./QuestionPage";
import { useParams } from "react-router";

export const Form = () => {
  const { id } = useParams();
  return (
    <>
      <div Style={{ marginTop: "80px" }}></div>
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
