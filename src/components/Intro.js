import React, { Component } from 'react';

export default class Intro extends Component {
  render() {
    return (
      <div className='intro'>
        <span className='title-container'><span>Title: </span>Learning The Keys To Physical Delivery Skills</span>
        <span className='section-points'>15 points</span>
        <span className='due-container'><span>Due: </span>Oct 18, 2016 - Oct 30, 2016</span>
        <p className='learning-container'><span>Learning Objective: </span>To develop knowledge and skills related to the student’s understanding of rehearsal techniques, and his/her abilities in
the ensemble performance as well as the knowledge of music literature and conducting skills.</p>
        <p className='desc-container'><span>Description: </span>As you watch the video, quiz questions will appear. You must answer all questions to submit the quiz.</p>
      </div>
    )
  }
}