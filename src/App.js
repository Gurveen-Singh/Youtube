import React from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import youtube from "./apis/youtube";
class App extends React.Component {
  state = { videoData: [], selectedVideo: null };

  async onSearchSubmit(term) {
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videoData: response.data.items });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div style={{ paddingTop: "10px" }}>
        <SearchBar onFormSubmit={this.onSearchSubmit.bind(this)} />
        <VideoList
          videos={this.state.videoData}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
