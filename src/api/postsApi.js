import axiosClient from "./axiosClient";

// api/productApi.js
const postsApi = {
  getAll: () => {
    const url = "/posts";
    return axiosClient.get(url);
  },

  get: (id) => {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },

  put: (data) => {
    const url = `/posts/${data.id}`;
    return axiosClient.put(url, data);
  },

  post: (data) => {
    const url = "/posts";
    console.log(data);
    return axiosClient.post(url, data);
  },

  delete: (id) => {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  },
};

export default postsApi;
