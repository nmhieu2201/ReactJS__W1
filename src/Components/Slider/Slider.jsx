import React, { Component } from "react";

export default class Slider extends Component {
  render() {
    return (
      <div className="py-5 slider">
        <div className="container text-center">
          <div style={{ padding: "0 100px" }}>
            <h2>A warm welcome!</h2>
            <p>
              Bootstrap utility classes are used to create this jumbotron since
              the old component has been removed from the framework. Why create
              custom CSS when you can use utilities?
            </p>
            <button className="btn btn-primary">Call to action</button>
          </div>
        </div>
      </div>
    );
  }
}
