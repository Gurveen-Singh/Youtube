import axios from "axios";

const KEY1 = "AIzaSyADAFShn-";
const KEY2 = "_PMjhEJPq0nNpCEStbQHOKiN4";
const KEY = KEY1 + KEY2;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: "8", key: KEY },
});
