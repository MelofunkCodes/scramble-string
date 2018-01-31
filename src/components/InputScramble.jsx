import React, { Component } from 'react';

import scrambleString from '../scramble';

class InputScramble extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleRescramble = this.handleRescramble.bind(this);
    this.renderResults = this.renderResults.bind(this);
  }

  handleButtonClick() {
    const userInput = this.userInput.value;
    const scrambledString = scrambleString(userInput);

    this.userInput.value = '';
    this.setState({
      userInput,
      scrambledString,
    });
  }

  handleRescramble() {
    this.setState({
      scrambledString: scrambleString(this.state.scrambledString),
    });
  }

  renderResults() {
    const { userInput, scrambledString } = this.state;

    return (
      <div className="input-results">
        <p>Original Text:</p>
        <div className="bday-text">{userInput}</div>
        <p>Scrambled Text:</p>
        <div className="bday-text">{scrambledString}</div>
      </div>
    );
  }

  render() {
    const { userInput, scrambledString } = this.state;

    return (
      <div className="input-scramble">
        <p>Enter words/sentence you want to scramble: </p>
        <div className="input-form">
          <input
            type="text"
            ref={(input) => { this.userInput = input; }}
          />
          <div className="two-buttons">
            <button type="button" onClick={this.handleButtonClick}>Scramble!</button>
            <button type="button" onClick={this.handleRescramble}>Scramble Again!</button>
          </div>
        </div>
        <br />
        {(userInput && scrambledString) ? this.renderResults() : null }
      </div>
    );
  }
}

export default InputScramble;
