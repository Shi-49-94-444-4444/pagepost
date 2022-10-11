import React, { useState, useEffect, useCallback } from "react";
import Posts from "./Post";
import Pagination from "../Components/Pagination";
import "../App.css";
import { Container, Button, Grid } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { loadPosts } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const ListPost = () => {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.data);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      await dispatch(loadPosts());
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Grid>
      <Container style={{ marginTop: "50px" }}>
        <h1>Posts</h1>
        <Button onClick={() => navigate(`/create`)}>AddPost</Button>
        <Posts onFetch={fetchPosts} posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
        <Outlet />
      </Container>
    </Grid>
  );
};

export default ListPost;
