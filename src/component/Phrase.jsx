import { Component } from "react";
class Phrase extends Component {
    constructor() {
      super();
      this.state = {
        Text: "le courage n'est pas l'absence de peur mais la capacité de vaincre ce qui fait peur",
         text :"le courage n'est pas l'absence de peur mais la capacité de vaincre ce qui fait peur"
      }}

      Transform = () => {
        this.setState({
          Text: this.state.Text.
          toUpperCase()
        });
      }
    
      Reset = () => {
        this.setState({
          text: this.state.text
        });
      }
     
         render() {
          return (
            <div>
              <p >
                {this.state.text}
              </p>
              <button onClick={this.Transform}>Transformer</button>
              <button onClick={this.Reset}>Réinitialiser</button>
            </div>
          )
      }}
    export default Phrase