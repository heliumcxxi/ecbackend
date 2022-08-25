import axios from "axios";

const BASE_URL = "https://jquest001.herokuapp.com/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYWY3MzcxNjg3NTVhOGFhNTVhZDdmZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjA4MzM3OX0.JHFwFsk4etoZrs96IC18YsrTiAV5HyspCEuN18vtrEs";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
