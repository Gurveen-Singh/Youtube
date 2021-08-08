import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onChangeInput(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.handleSubmit.bind(this)} className="ui form">
          <div className="field">
            <label> Search Videos</label>
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