import React from "react";
import { Button, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Posts = ({ posts, loading }) => {

  const navigate = useNavigate()
  
  if (loading) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <Card>
      {posts.map((post) => (
        <CardContent key={post.id} className="list-group-item">
          {post.id}. {post.title}
          <Button style={{ float: "right" }} onClick={() => navigate(`/comment/${post.id}`)}>
            View
          </Button>
        </CardContent>
      ))}
    </Card>
  );
};

export default Posts;
