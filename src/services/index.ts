import axios from "axios";

// const financeClient = axios.create({
//   baseURL: "http://localhost:3004",
//   responseType: "json",
//   withCredentials: true,
// });

export const getLoansData = () => {
  return axios.get("http://localhost:3004/loansData");
};
