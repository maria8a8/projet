import { Component } from "react";
class Phrase extends Component{ 
     constructor()
     {
    super()
    this.state = {
      compt: 0
    };
  }

  Increment = () => {
    this.setState({ compt: this.state.compt + 1 })
  }
decrementer = () =>{ this.setState({ compt: this.state.compt - 1 })
  }

  Reset = () => {
    this.setState({ compt: 0 })
  }

  render() {
    return (
      <div>
        <h1> le compteur est : {this.state.compt}</h1>
        <button onClick={this.Increment}>Incrémenter</button>
        <button onClick={this.Decrement}>Décrémenter</button>
        <button onClick={this.Reset}>Reset</button>
      </div>
    );
  }
}

export default Compteur;
