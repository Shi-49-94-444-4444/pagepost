import React, { useState } from "react";
import {
  Container,
  Input,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import postsApi from "../api/postsApi";

const Create = () => {
  const [state, setState] = useState({
    userId: "",
    title: "",
    body: "",
  });

  const handle = (e) => {
    const newState = {...state}
    newState[e.target.id] = e.target.value;
    setState(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    postsApi.post({
      userId: state.userId,
      title: state.title,
      body: state.body,
    });
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <h1>Create</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="userId">userId</InputLabel>
          <Input
            id="userId"
            onChange={(e) => handle(e)}
            value={state.useId}
          ></Input>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="title">title</InputLabel>
          <Input
            id="title"
            onChange={(e) => handle(e)}
            value={state.title}
          ></Input>
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="body">body</InputLabel>
          <Input
            id="body"
            onChange={(e) => handle(e)}
            value={state.body}
          ></Input>
        </FormControl>
        <Button type="submit" size="large" color="info">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
