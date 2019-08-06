import React, { Component } from "react";
import cx from "classnames";

class Accordion extends Component {
  state = {
    selectedTab: null
  };

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

  static Head = ({ id, changeTab, children }) => (
    <div className="Accordion-Head" onClick={() => changeTab(id)}>
      {children}
    </div>
  );

  static Body = ({ id, changeTab, children, selectedTab }) => (
    <div className={cx("Accordion-Body", { open: selectedTab === id })}>
      {children}
    </div>
  );

  render() {
    return React.Children.map(this.props.children, childEl => {
      if (React.isValidElement(childEl)) {
        return React.cloneElement(childEl, {
          selectedTab: this.state.selectedTab,
          changeTab: this.changeTab
        });
      }
    });
  }
}

export default Accordion;
