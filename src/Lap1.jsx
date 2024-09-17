import React, { Component } from 'react';
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
        <div>Hello, my name is {name} and I am {age} years old.</div>
      </>
    )
  }
}

export default Person;