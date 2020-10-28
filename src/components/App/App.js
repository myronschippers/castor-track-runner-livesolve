import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    milesRan: 0,
    recentRun: 0,
    longestRun: 0,
  };

  handleSubmitRun = (event) => {
    event.preventDefault();

    // previous longest run this.state.longestRun
    // new run this.state.milesRan
    let newLongestRun = this.state.longestRun;

    if (this.state.milesRan > this.state.longestRun) {
      newLongestRun = this.state.milesRan;
    }

    this.setState({
      recentRun: this.state.milesRan,
      longestRun: newLongestRun,
    });
  };

  handleMilesChange = (event) => {
    console.log(event.target.value);
    this.setState({
      milesRan: parseInt(event.target.value),
    });
  };

  render() {
    return (
      <div>
        <header>
          <h1>React Track Runner</h1>
        </header>

        <form onSubmit={this.handleSubmitRun}>
          <input
            type="number"
            placeholder="Miles Ran"
            onChange={this.handleMilesChange}
          />
          <button>AddNewRun</button>
        </form>

        <p>Recent Run: {this.state.recentRun}</p>
        <p>Longest Run: {this.state.longestRun}</p>
      </div>
    );
  }
}

export default App;
