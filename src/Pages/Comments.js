import React, { useEffect } from "react";
import { Container, Card, CardContent } from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getComments } from "../redux/action";

const Comments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comment);

  useEffect(() => {
    const fetchPosts = async () => {
      const param = { postId: id };
      await dispatch(getComments(param));
    };

    fetchPosts();
  }, [dispatch, id]);

  return (
    <Container style={{ marginTop: "50px" }}>
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
