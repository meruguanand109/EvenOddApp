import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {even: true, count: 0}

  onIncrement = () => {
    const number = Math.floor(Math.random() * 101)
    this.setState(prevState => ({
      count: prevState.count + number,
    }))

    if (number % 2 === 0) {
      this.setState(prevState => ({even: true}))
    } else {
      this.setState(prevState => ({even: !prevState.even}))
    }
  }

  renderEven = () => {
    const {even, count} = this.state
    return even === true ? (
      <p className="sub-heading">Count is Even</p>
    ) : (
      <p className="sub-heading">Count is Odd</p>
    )
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Count {count}</h1>
          {this.renderEven()}
          <button className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
