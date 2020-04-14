import React, { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

class Soda extends Component {
  render() {
    return (
      <Message>
        <h1>Soda</h1>
        <Link to="/">Go Back</Link>
      </Message>
    );
  }
}

export default Soda;
