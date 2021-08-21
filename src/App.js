import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import YouTube from "./apis/YouTube";

const App = () => {
  const [videoData, setVideoData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearchSubmit("Tanay Pratap");
  }, []);

  const onSearchSubmit = async (term) => {
    const response = await YouTube.get("/search", { params: { q: term } });

    setVideoData(response.data.items);
    setSelectedVideo(response.data.items[1]);
  };

  return (
    <div style={{ padding: "10px 10px", backgroundColor: "#000" }}>
      <SearchBar onFormSubmit={onSearchSubmit} />
      <div className="ui grid">
        <div className=" ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videoData} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
