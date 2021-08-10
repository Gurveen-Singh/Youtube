import axios from "axios";

const KEY = "AIzaSyADAFShn-_PMjhEJPq0nNpCEStbQHOKiN4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", maxResults: "8", key: KEY },
});
