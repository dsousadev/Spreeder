import React, { Component } from 'react';
import ReactSpritz from 'react-spritz';
import epub from 'epubjs'
import Dropzone from './Dropzone';
import '../node_modules/react-spritz/build/main.css';

class App extends Component {
  state = {
    text: "Welcome to Spreed, where you can read your favorite ebooks at lightning speed",
    book: null,
    speed: 150,
    chapter: 1
  }

  handleUpload = (file) => {
    var Book = epub();
    console.log(Book.open(file));
  }

  render() {
    return (
      <div className="App">
        <ReactSpritz
          text={this.state.text}
          wpm={this.state.speed}
          playing
        />
        <Dropzone getBook={this.handleUpload}/>
      </div>
    );
  }
}

export default App;
