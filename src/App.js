import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from "./hooks/useVideo";

const App = () => {
  const [videos, search] = useVideos("Buildings");
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    setSelectedVideo(videos[1]);
  }, [videos]);

  return (
    <div style={{ padding: "10px 10px", backgroundColor: "#000" }}>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className=" ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
