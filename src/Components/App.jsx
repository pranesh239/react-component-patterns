import React, { Component } from "react";
import "./styles.scss";

// import Accordion from "./Accordion/Accordion-context";
import Accordion from "./Accordion/Accordion";

class App extends Component {
  state = {};

  handleAccordionChange = id => {
    console.log("changed to: ", id);
  };

  render() {
    return (
      <div className="container">
        <Accordion onChange={this.handleAccordionChange}>
          <Accordion.Head id="india">India</Accordion.Head>
          <Accordion.Body id="india">India selected</Accordion.Body>
          <Accordion.Head id="australia">Australia</Accordion.Head>
          <Accordion.Body id="australia">Australia selected</Accordion.Body>
          <Accordion.Head id="canada">Canada</Accordion.Head>
          <Accordion.Body id="canada">Canada selected</Accordion.Body>
        </Accordion>
      </div>
    );
  }
}

export default App;
