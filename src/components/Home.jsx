import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

import BdayScramble from './BdayScramble';
import InputScramble from './InputScramble';


class Home extends Component {
  constructor() {
    super();
    this.state = { show: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    const { show } = this.state;
    return (
      <div className="home-page">
        <header>
          <h1>Scrambled!</h1>
          <button onClick={this.handleClick}>
            {(show) ? 'Home' : 'Scramble my own words!'}
          </button>
        </header>
        <div>
          <ToggleDisplay show={!show}>
            <BdayScramble />
          </ToggleDisplay>
          <ToggleDisplay show={show}>
            <InputScramble />
          </ToggleDisplay>
        </div>
      </div>
    );
  }
}

export default Home;
