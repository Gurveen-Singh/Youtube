import React from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import YouTube from "./apis/YouTube";
class App extends React.Component {
  componentDidMount() {
    this.onSearchSubmit("Tanay Pratap");
  }
  state = { videoData: [], selectedVideo: null };

  async onSearchSubmit(term) {
    const response = await YouTube.get("/search", { params: { q: term } });
    this.setState({
      videoData: response.data.items,
      selectedVideo: response.data.items[1],
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div style={{ padding: "10px 10px", backgroundColor: "#000" }}>
        <SearchBar onFormSubmit={this.onSearchSubmit.bind(this)} />
        <div className="ui grid">
          <div className=" ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videoData}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
