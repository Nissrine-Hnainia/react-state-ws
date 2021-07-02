import './App.css';
import Counter from './Components/Counter';
import React, { Component } from 'react'

export default class App extends Component {
  //1-state init
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  //2-update the state
  toggle = () => {
    this.setState({show: !this.state.show})
  }


  render() {
    return (
      <div>
        <h1>State WS</h1>
        <button onClick={this.toggle} > toggle </button>
        {this.state.show ? <Counter /> : null }
      </div>
    )
  }
}

