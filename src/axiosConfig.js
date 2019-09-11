import axios from "axios";

export default axios.create({
  baseURL: "https://us-central1-renfi-69a94.cloudfunctions.net/api/",
  responseType: "json"
});