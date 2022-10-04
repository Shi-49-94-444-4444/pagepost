import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Card } from "@mui/material";
import { useParams } from "react-router";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchPosts = async () => {
      const comments = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(comments.data);
    };

    fetchPosts();
  }, []);

  console.log(comments)

  return (
    <Container>
      {Object.entries(comments).map((comment) => {
        if (comment.postId === id) {
          return (
            <Card key={comment.id}>
              {comment.id}
              {comment.name}
            </Card>
          );
        } else {
          console.log(comment.id)
          return <Card key={comment.id}>AB</Card>;
        }
      })}
    </Container>
  );
};

export default Comments;
