import React, { Component } from 'react';
import logo from './logo.svg';
import hero_image from './hero_image.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <img src={hero_image} className="hero-image" />
          <div className="hero-text">
            <h1>Mathematician <span className="cross">/</span> Software Engineer</h1>
            {/* <p>And I'm a Photographer</p> */}
            <button>Learn more about me</button>
          </div>
        </div>
        <div>
          <p>Powered by React</p>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
    );
  }
}

export default App;
