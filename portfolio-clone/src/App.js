import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      expandedNavbar: 'navbar-expanded',
      toggleDropdown: false
     }
  }

  handleToggle = () => {
    this.setState({toggleDropdown: !this.state.toggleDropdown})
  }

  render() { 
    return ( 
      <div className="App">
        <nav className="navbar navbar-expanded fixed-top">
          <div className="container">
          <a className="navbar-brand any-link scroll-trigger">Start Bootstrap</a>
          <div className="navbar-responive navbar-collapse">
            {this.state.toggleDropdown
            ?(
              <div>
                <button className="dropdown-toggle" onClick={this.toggleDropdown}>
                  Menu
                </button>
                <nav className="mobile-links">
                  <p>services</p>
                  <p>portfolio</p>
                  <p>about</p>
                  <p>team</p>
                  <p>contact</p>
                </nav>
              </div>)
            : (<div>
                <button className="dropdown-toggle" onClick={this.toggleDropdown}>
                  Menu
                </button>
              </div>)
            }
          </div>
          </div>
        </nav>
        <ul className="navbar-nav text-uppercase">
              <li className="nav-item">
                <a className="nav-link any-link scroll-trigger">services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link any-link scroll-trigger">portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link any-link scroll-trigger">about</a>
              </li>
              <li className="nav-item">
                <a className="nav-link any-link scroll-trigger">team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link any-link scroll-trigger">contact</a>
              </li>
            </ul>
        <header className="masterhead">
          <div className="container intro-container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Our Studio!</div>
              <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
              <a className="primary-btn xl-btn text-uppercase scroll-trigger">
                Tell Me More
              </a>
            </div>
          </div>
        </header>
      </div>
     );
  }
}
 
export default App;
