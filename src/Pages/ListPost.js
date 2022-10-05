import React, { useState, useEffect, useCallback } from "react";
import Posts from "./Post";
import Pagination from "../Components/Pagination";
import "../App.css";
import { Container, Button, Grid } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import postsApi from "../api/postsApi";

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const res = await postsApi.getAll();
      setPosts(res);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  },[]);

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
