import React, { Component } from "react";
import cx from "classnames";
import AccordionContext from "./Context";

class Accordion extends Component {
  changeTab = id => {
    this.setState(
      state => {
        return { selectedTab: state.selectedTab === id ? null : id };
      },
      () => {
        this.props.onChange(id);
      }
    );
  };

  static Head = ({ id, children }) => (
    <AccordionContext.Consumer>
      {({ changeTab }) => (
        <div className="Accordion-Head" onClick={() => changeTab(id)}>
          {children}
        </div>
      )}
    </AccordionContext.Consumer>
  );

  static Body = ({ id, children }) => (
    <AccordionContext.Consumer>
      {({ selectedTab }) => (
        <div className={cx("Accordion-Body", { open: selectedTab === id })}>
          {children}
        </div>
      )}
    </AccordionContext.Consumer>
  );

  state = {
    selectedTab: null,
    changeTab: this.changeTab
  };

  render() {
    return (
      <AccordionContext.Provider value={this.state}>
        {this.props.children}
      </AccordionContext.Provider>
    );
  }
}

export default Accordion;
