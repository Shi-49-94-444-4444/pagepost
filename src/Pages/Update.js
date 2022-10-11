import React, { useEffect, useState } from "react";
import {
  Container,
  Input,
  FormControl,
  InputLabel,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost, updatePost } from "../redux/action";

const Create = () => {
  const { id } = useParams();
  const [state, setState] = useState({
    title: "",
    body: "",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.data);

  const handle = (e) => {
    const newState = { ...state };
    newState[e.target.id] = e.target.value;
    setState(newState);
  };

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (post) {
      setState({ ...post });
    }
  }, [post]);

  const submitHandle = () => {
    dispatch(
      updatePost({
        id: id,
        title: state.title,
        body: state.body,
      })
    );
  };

  return (
    <Container style={{ marginTop: "50px" }}>
      <h1>Update</h1>
      <form onSubmit={handleSubmit(submitHandle)}>
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="title">title</InputLabel>
          <Input
            {...register("title", { required: true })}
            id="title"
            onChange={(e) => handle(e)}
            value={state.title || ""}
          ></Input>
          {errors.title && <span>This field is required</span>}
        </FormControl>
        <FormControl fullWidth style={{ marginBottom: "10px" }}>
          <InputLabel htmlFor="body">body</InputLabel>
          <Input
            {...register("body", { required: true })}
            id="body"
            onChange={(e) => handle(e)}
            value={state.body || ""}
          ></Input>
          {errors.body && <span>This field is required</span>}
        </FormControl>
        <Button type="submit" size="large" color="info">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Create;
