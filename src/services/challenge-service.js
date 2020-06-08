import axios from "axios";

export function getChallenges() {
  return axios.get(process.env.VUE_APP_API_URL + "/challenges");
}

export function getPictures() {
  return axios.get(process.env.VUE_APP_API_URL + "/pictures");
}
