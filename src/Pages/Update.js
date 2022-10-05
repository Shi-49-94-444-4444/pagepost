import React, { useState } from "react";
import {
  Container,
  Input,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import postsApi from "../api/postsApi";
import { useParams } from "react-router-dom";

const Create = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    title: "",
    body: "",
  });

  const handle = (e) => {
    const newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postsApi.put({
      id: id,
      title: state.title,
      body: state.body,
    });
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <h1>Update</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
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
