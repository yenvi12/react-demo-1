import React, { Component } from 'react';
import './App.css';
class Person extends Component {
  constructor() {
    super()
    this.state = ({
      name: "Vi",
      age: 20,
    })
  }

  render() {
    const { name, age } = this.state
    return (
      <>
        <div className='hello'>
          Hello, my name is {name} and I am {age} years old.
          </div>
      </>
    )
  }
}

export default Person;