import React, { Component } from 'react';

import scrambleString from '../scramble';


class BdayScramble extends Component {
  constructor() {
    super();

    this.state = {
      originalText: 'Happy Birthday, Scramble!',
    };

    this.scrambleBday = this.scrambleBday.bind(this);
    this.resetText = this.resetText.bind(this);
  }

  scrambleBday() {
    this.setState({
      scrambledString: scrambleString(this.state.originalText),
    });
  }

  resetText() {
    this.setState({
      scrambledString: '',
    });
  }

  render() {
    const { originalText, scrambledString } = this.state;
    return (
      <div className="bday-scramble">
        <div className="bday-text">{ (scrambledString) ? scrambledString : originalText }</div>
        <div className="bday-buttons">
          <button onClick={this.scrambleBday}>Scramble!</button>
          <button onClick={this.resetText}>Reset</button>
        </div>
      </div>
    );
  }
}


export default BdayScramble;
