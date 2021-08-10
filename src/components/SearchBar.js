import React from "react";
class SearchBar extends React.Component {
  state = { term: "" };

  onChangeInput(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div
        className="search-bar ui segment"
        style={{ backgroundColor: " #ff0000" }}
      >
        <form onSubmit={this.handleSubmit.bind(this)} className="ui form">
          <div className="field">
            <label style={{ fontWeight: "900", padding: "5px" }}>
              {" "}
              Search Videos
            </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onChangeInput.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
