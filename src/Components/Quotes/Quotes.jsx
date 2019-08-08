import { Component } from "react";

class Quotes extends Component {
  state = {
    isFavourite: false
  };

  toggleFavourite = () => {
    const { onToggle } = this.props;

    this.setState(
      state => ({ isFavourite: !state.isFavourite }),
      () => onToggle(this.state.isFavourite)
    );
  };

  copyQuote = quote => {
    navigator.clipboard.writeText(quote);
  };

  render() {
    const { isFavourite } = this.state;
    return this.props.children({
      isFavourite,
      toggleFavourite: this.toggleFavourite,
      copyQuote: this.copyQuote
    });
  }
}

export default Quotes;
