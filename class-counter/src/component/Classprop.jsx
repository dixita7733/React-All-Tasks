import React, { Component } from 'react'

export class Classprop extends Component {
  constructor(){
    super();

    this.state = {
        count : 0
    }
  }

  plus = () => {
    this.setState({count : this.state.count + 1})
  }

  min = () => {
    this.setState({count : this.state.count - 1})
  }
  render() {
    return (
      
      <div>
        <div>{this.state.count}</div>
        <button onClick={this.plus}>+</button>
        <button onClick={this.min}>-</button>
      </div>
    )
  }
}

export default Classprop
