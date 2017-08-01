import React, { Component } from 'react'
import classNames from 'classnames'
import validatejs from 'validate.js'

const INPUT_REGEX = /\[(\w+)\]/

class Book extends Component {
  constructor () {
    super()
    this.state = this.setInitialState()
  }

  setInitialState() {
    return {
      author: this.props.book.author,
      title: this.props.book.title
    }
  }

  handleInputChange(event) {
    const target = event.target
    const value = target.value
    const name = target.name.match(INPUT_REGEX)[1]
    this.setState({
      comment: {
        description: value
      }
    })
  }

  render () {
    return (
      <div className="container">
        <li className="book">
          <p>{this.state.author}</p>
          <p>{this.state.title}</p>
        </li>
      </div>
    )
  }

}
export default Book
