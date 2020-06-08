import axios from "axios";

export function getChallenges() {
  return axios.get("http://localhost:3000/challenges");
}

export function getPictures() {
  return axios.get("http://localhost:3000/pictures");
}
