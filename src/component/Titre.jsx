
import React, { Component } from 'react';
import './Phrase.css'; // إذا أردت إضافة تنسيق

class Phrase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUppercase: false,
      text: "le courage n'est pas l'absence de peur mais la capacité de vaincre ce qui fait peur"
    };
  }

  handleTransform = () => {
    this.setState({ isUppercase: true });
  }

  handleReset = () => {
    this.setState({ isUppercase: false });
  }

  render() {
    return (
      <div className="phrase">
        <p className={this.state.isUppercase ? 'uppercase' : ''}>
          {this.state.text}
        </p>
        <button onClick={this.handleTransform}>Transformer</button>
        <button onClick={this.handleReset}>Réinitialiser</button>
      </div>
    );
  }
}

export default Phrase;




  