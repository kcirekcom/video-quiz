import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import VideoQuiz from './components/VideoQuiz';
import questionData from './data/questions.json';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: questionData
    }
  }

  render() {
    return (
      <div className="app">
        <Navbar />
        <Intro />
        <VideoQuiz data={this.state.data} />

      </div>
    );
  }
}
