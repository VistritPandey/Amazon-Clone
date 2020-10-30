import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:5001/vistrit-amaz0n/us-central1/api'
});

export default instance;