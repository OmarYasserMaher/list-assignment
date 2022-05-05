import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";
class App extends Component {
  state = {
    chars: [],
    word: "",
  };
  inputChangedHandler = (event) => {
    const word = event.target.value;
    const chars = [];
    for (var i = 0; i < word.length; i++) {
      let item = { id: i, value: word[i] };
      chars.push(item);
    }
    this.setState({
      chars: chars,
      word: word,
    });
  };
  deleteCharHandler = (index) => {
    // const persons = this.state.persons.slice();
    const chars = [...this.state.chars];
    console.log(chars);
    chars.splice(index, 1);
    let word = "";
    for (var i = 0; i < chars.length; i++) {
      let char = chars[i].value;
      word += char;
    }
    this.setState({
      chars: chars,
      word: word,
    });
  };
  render() {
    const charList = (
      <div>
        {this.state.chars.map((char, index) => {
          return (
            <Char
              click={() => this.deleteCharHandler(index)}
              char={char.value}
              key={char.id}
            />
          );
        })}
      </div>
    );
    return (
      <div className="App">
        <input
          type="text"
          onChange={(event) => this.inputChangedHandler(event)}
          value={this.state.word}
        />
        <p>{this.state.word.length}</p>
        <Validation length={this.state.word.length} />
        {charList}
      </div>
    );
  }
}
export default App;
