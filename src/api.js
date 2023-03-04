import axios from "axios";

export default function api() {
  return axios.create({
    baseURL: "https://react-yazi-yorum-ffi3.onrender.com",
  });
}
