import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "42a865f61a7b4d2e940ab1f1761a32f0",
  },
});
