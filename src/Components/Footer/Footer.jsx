import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="bg-dark p-5">
        <div className="container d-flex justify-content-center align-items-center ">
          <p className="text-center text-white" style={{ margin: "auto" }}>
            Copyright © Your Website 2022
          </p>
        </div>
      </div>
    );
  }
}
