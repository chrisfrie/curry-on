import axios from "axios";

export function getChallenges() {
  return axios.get("http://localhost:3000/challenges");
}
