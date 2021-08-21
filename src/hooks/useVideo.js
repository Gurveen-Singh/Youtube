import { useState, useEffect } from "react";
import Youtube from "../apis/YouTube";

const useVideos = (defaultTerm) => {
  const [videos, setVideoData] = useState([]);

  useEffect(() => {
    search(defaultTerm);
  }, [defaultTerm]);

  const search = async (term) => {
    const response = await Youtube.get("/search", { params: { q: term } });

    setVideoData(response.data.items);
  };

  return [videos, search];
};

export default useVideos;
