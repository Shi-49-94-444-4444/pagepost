import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { useDispatch } from "react-redux";
import { deletePost } from "../redux/action";

const Posts = ({ posts, loading, onFetch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleDelete = async (id) => {
    await dispatch(deletePost(id));
  };

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CircularProgress color="secondary" size="5rem" />
      </div>
    );
  }

  return (
    <Grid>
      <Card>
        {posts.map((post) => (
          <CardContent key={post.id} className="list-group-item">
            {post.id}. {post.title}
            <Button
              style={{ float: "right" }}
              onClick={() => navigate(`/comment/${post.id}`)}
            >
              View
            </Button>
            <Button
              style={{ float: "right" }}
              color="inherit"
              onClick={() => navigate(`/update/${post.id}`)}
            >
              Update
            </Button>
            <Button
              style={{ float: "right" }}
              color="warning"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </CardContent>
        ))}
      </Card>
    </Grid>
  );
};

export default Posts;
