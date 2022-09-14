import React, { Component } from "react";
import "../../assets/Style.css";
export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="bg-dark header">
          <div className="container">
            <nav className="navbar">
              <div className="container-fluid d-flex justify-content-space-between align-items-center">
                <a className="navbar-brand text-light logo">Start Bootstrap</a>
                <form className="d-flex align-items-center menu" role="search">
                  <a className="navbar-brand text-light item" href="#">
                    Home
                  </a>
                  <a className="navbar-brand item " href="#">
                    About
                  </a>
                  <a
                    className="navbar-brand item "
                    href="#"
                  >
                    Contact
                  </a>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
