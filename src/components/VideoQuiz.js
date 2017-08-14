import React, { Component } from 'react';
import Questions from './Questions';

export default class VideoQuiz extends Component {
  render() {

    var menuItem = this.props.data.map(function(d, i) {
      return (
        <div className='menu-item' key={i}>{d.questionOrder}</div>
      );
    }, this);

    return (
      <div className='video-quiz'>
        <div className="dropdown-menu">
          Question {menuItem} of 5 <span className='arrow-down' />
          <span className='points'>Worth 3 points</span>
        </div>
        <iframe title='Pearson video - The Implications for Learning' src='https://www.youtube.com/embed/cWf5F723Lb8' frameBorder='0' allowFullScreen></iframe>
        <Questions data={this.props.data}/>
      </div>
    )
  }
}