import axios, { AxiosResponse } from "axios";
import { INft } from "../Models/Nft";
import { IUser } from "../Models/User";

const apiURL = "";

axios.defaults.baseURL = `${apiURL}/api`;

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    //toast.error("Network error!");
  }

  const { status, data, config } = error.response;

  if (status == 401) {
    window.location.href = "/";
  }

  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    window.location.href = "/";
    return;
  }

  if (status === 500) {
    throw error;
  }

  throw error;
});

const responseBody = (response: AxiosResponse) => response.data;

const headers = {
  "Content-Type": "application/json",
};

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>(resolve =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) => 
    axios
      .get(url, { headers })
      .then(sleep(1000))
      .then(responseBody),
  post: (url: string, body: {}) =>
    axios
      .post(url, body, { headers })
      .then(sleep(1000))
      .then(responseBody),
  put: (url: string, body: {}) =>
    axios
      .put(url, body, { headers })
      .then(sleep(1000))
      .then(responseBody),
  del: (url: string) => 
    axios
      .delete(url, { headers })
      .then(sleep(1000))
      .then(responseBody),
};

const User = {
  get: (id: number) => requests.get(`/user/get/${id}`),
  create: (user: IUser) => requests.post("/user/create", user),
  update: (user: IUser) => requests.put(`/user/update`, user),
  delete: (id: number) => requests.del(`/user/delete?id=${id}`)
}

const Nft = {
  get: (id: number) => requests.get(`/user?id=${id}`),
  create: (nft: INft) => requests.post("/nft", nft),
  update: (nft: INft) => requests.put("/nft", nft),
  delete: (id: number) => requests.del(`/user?id=${id}`)
}

export default {
  User,
  Nft
}