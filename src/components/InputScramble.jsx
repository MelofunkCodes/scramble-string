import React, { Component } from 'react';

import scrambleString from '../scramble';

class InputScramble extends Component {
  constructor() {
    super();
    this.state = {};

    this.handleButtonClick = this.handleButtonClick.bind(this);
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

  renderResults() {
    const { userInput, scrambledString } = this.state;

    return (
      <div>
        <p>Original Text:</p>
        {userInput}
        <p>Scrambled Text:</p>
        {scrambledString}
      </div>
    );
  }

  render() {
    const { userInput, scrambledString } = this.state;

    return (
      <div className="input-scramble">
        <p>Enter words/sentence you want to scramble: </p>
        <input
          type="text"
          ref={(input) => { this.userInput = input; }}
        />
        <button type="button" onClick={this.handleButtonClick}>Scramble it up!</button>
        <br />
        {(userInput && scrambledString) ? this.renderResults() : null }
      </div>
    );
  }
}

export default InputScramble;
