import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import DoneWindow from "./components/DoneWindow";

class App extends Component {
  state = {
    mounted: true
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({mounted: false});
  }

  render() {
    if(this.state.mounted === true){
      return (
        <div className="app">
          <CSSTransitionGroup
            transitionName = "fade"
            transitionAppear = {true}
            transitionAppearTimeout = {500}
            transitionEnter = {false}
            transitionLeaveTimeout = {300} >
            {this.state.mounted && <Form onSubmit={this.handleSubmit} />}
          </CSSTransitionGroup>
        </div>
      );
    }
    else {
      return(
        <div className="app">
          <DoneWindow/>
        </div>
      )
    }
  }
}

export default App;
