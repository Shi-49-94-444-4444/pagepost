import React from "react";
import { Button, Card, CardContent, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import postsApi from "../api/postsApi";

const Posts = ({ posts, loading, onFetch }) => {
  const navigate = useNavigate();

  const handleDelete = async id => {
    await postsApi.delete(id)

    onFetch()
  }

  if (loading) {
    return <h2>Loading...</h2>;
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
