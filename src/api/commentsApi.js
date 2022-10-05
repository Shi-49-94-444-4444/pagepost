import axiosClient from "./axiosClient";

// api/productApi.js
const commentsApi = {
  getAll: (param) => {
    console.log(param);
    const url = "/comments?postId=" + encodeURIComponent(param.postId);
    const res = axiosClient.get(url);
    return res;
  },

  get: (id) => {
    const url = `/comments/${id}`;
    return axiosClient.get(url);
  },
};

export default commentsApi;
