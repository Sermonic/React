// THIS IS THE 'fake' routing implemention.
// THIS CODE WON'T WORK UNLESS YOU MOVE IT INTO APP.JS
import React, { Component } from "react";
import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "about" };
  }

  changePage(newPage) {
    this.setState({ page: newPage });
  }

  renderPage() {
    if (this.state.page === "about") return <About />;
    if (this.state.page === "dog") return <Dog />;
    if (this.state.page === "contact") return <Contact />;
  }

  render() {
    return (
      <div className="App">
        <nav>
          <a onClick={() => this.changePage("about")}>About</a>
          <a onClick={() => this.changePage("dog")}>Dog</a>
          <a onClick={() => this.changePage("contact")}>Contact</a>
        </nav>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
