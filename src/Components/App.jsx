import React, { Component } from "react";
import cx from "classnames";

import Quotes from "./Quotes/Quotes";
import { API } from "./constants";
import "./styles.scss";

class App extends Component {
  state = {
    quotes: []
  };

  componentDidMount() {
    fetch(API.url)
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ quotes: data });
      });
  }

  getDisplayQuotes = () => {
    return (
      <div className="quotes-container">
        {this.state.quotes.map((quote, index) => (
          <Quotes
            key={index}
            onToggle={() => {
              console.log("toggled");
            }}
          >
            {({ isFavourite, toggleFavourite, copyQuote }) => {
              return (
                <div
                  className={cx("quotes-block", {
                    ["quotes-favourite"]: isFavourite
                  })}
                  onClick={toggleFavourite}
                >
                  <div className="quotes-star" role="img">
                    {isFavourite ? "★" : "☆"}
                  </div>
                  <span className="quotes-display">{quote.en}</span>
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      copyQuote(quote.en);
                    }}
                  >
                    Copy
                  </button>
                </div>
              );
            }}
          </Quotes>
        ))}
      </div>
    );
  };

  render() {
    return this.state.quotes.length > 0
      ? this.getDisplayQuotes()
      : "Loading quotes....";
  }
}

export default App;
