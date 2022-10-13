import React, { useState, useEffect, useCallback } from "react";
import Posts from "./Post";
import usePagination from "../Components/Pagination";
import "../App.css";
import { Container, Button, Grid, Pagination } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { paginationPage } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import postsApi from "../api/postsApi";

const ListPost = () => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { posts, loading } = useSelector((state) => state.data);
  let [page, setPage] = useState(1);
  const PER_PAGE = 10;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(posts, PER_PAGE);

  const handleChange = async (e, p) => {
    setPage(p);
    _DATA.jump(p);
    await dispatch(paginationPage(p));
  };

  const fetchPosts = useCallback(async () => {
    try {
      let p = 1;
      // setLoading(true);
      await dispatch(paginationPage(p));
      const res = await postsApi.getAll();
      setData(res);
      // setLoading(false);
    } catch (error) {
      console.log("Failed to fetch product list: ", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <Grid>
      <Container style={{ marginTop: "50px" }}>
        <h1>Posts</h1>
        <Button onClick={() => navigate(`/create`)}>AddPost</Button>
        <Posts onFetch={fetchPosts} posts={_DATA} loading={loading} />
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
        <Outlet />
      </Container>
    </Grid>
  );
};

export default ListPost;
