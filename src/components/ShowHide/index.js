import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    isShowFirstName: false,
    isShowLastName: false,
  }

  onShowFirstName = () => {
    this.setState(prevState => ({isShowFirstName: !prevState.isShowFirstName}))
  }

  onShowLastName = () => {
    this.setState(prevState => ({isShowLastName: !prevState.isShowLastName}))
  }

  render() {
    const {isShowFirstName, isShowLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="name-cards-bg-container">
          <div className="name-button-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {isShowFirstName && <p className="name">Joe</p>}
          </div>

          <div className="name-button-container">
            <button
              className="button"
              type="button"
              onClick={this.onShowLastName}
            >
              Show/Hide lastname
            </button>
            {isShowLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
