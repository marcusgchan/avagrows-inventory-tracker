import axios from "axios";

const BASE_URL = "http://localhost:3001/api";

const partsServices = {
  getParts() {
    return axios.get(BASE_URL + "/parts");
  },
  getLocations() {
    return axios.get(BASE_URL + "/locations");
  },
  getStatuses() {
    return axios.get(BASE_URL + "/statuses");
  },
  getCategories() {
    return axios.get(BASE_URL + "/categories");
  },
};

export default partsServices;
