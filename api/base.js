import axios from "axios";

async function get(url) {
  return axios.get(url);
}

export { get };
