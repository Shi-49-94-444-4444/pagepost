import React, { useEffect, useState } from "react";
import { Container, Card, CardContent } from "@mui/material";
import { useParams } from "react-router";
import commentsApi from "../api/commentsApi";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(() => { 
    const fetchPosts = async () => {
      const param = { postId: id };
      const res = await commentsApi.getAll(param);
      setComments(res);
    };

    fetchPosts();
  }, [id]);

  return (
    <Container style={{ marginTop: "50px", }}>
      <h1>Comments</h1>
      <Card>
        {comments.map((comment) => (
          <CardContent key={comment.id}>
            {comment.id}. {comment.name}
          </CardContent>
        ))}
      </Card>
    </Container>
  );
};

export default Comments;
