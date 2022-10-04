import axiosClient from "./axiosClient";

// api/productApi.js
const productApi = {
  getAll: (params) => {
    const url = "/Post";
    return axiosClient.get(url, { params });
  },

  get: (id) => {
    const url = `/Post/${id}`;
    return axiosClient.get(url);
  },
};

export default productApi;
