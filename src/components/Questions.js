import React, { Component } from 'react';

export default class Questions extends Component {
  constructor(props) {
    super(props);

    this.showButton = this.showButton.bind(this);
    this.hideButton = this.hideButton.bind(this);

    this.state = {
      resumeButton: false,
    }
  }

  showButton () {
    this.setState({
      resumeButton: true
    });
  }

  hideButton() {
    this.setState({
      resumeButton: false
    });
  }
  
  render() {
    var questionsBox = this.props.data.map(function(d, i) {
      return (
        <div className='question-box' key={i}>
          <div className='question-title'>
            <p>{d.question}</p>
          </div>

          <label htmlFor={'Question ' + d.questionOrder} className='question-label'>Question {d.questionOrder} [{d.timeSequence}]</label>

          <div className='answer-box'>
            {d.answers.map((answer, i) => {
              return (
                <div className='answer' key={i}>
                  <input type='radio' name={'Question ' + d.questionOrder} title={d.question} id={'answer-' + (i + 1)} value={answer} onChange={this.showButton} />
                  <label htmlFor={'answer-' + (i + 1)}>{answer}</label>
                </div>
              );
            })}

            {this.state.resumeButton ? <button onClick={this.hideButton} className="resume-button" name="resume-button" type="button" value="Resume Quiz">Resume</button> : null}
          </div>
        </div>
      );
    }, this);

    return (
      <form className='questions-form'>
        {questionsBox}

        <button className="submit-button" name="submit-button" type="submit" value="Submit Quiz">Submit Quiz</button>
      </form>
    )
  }
}