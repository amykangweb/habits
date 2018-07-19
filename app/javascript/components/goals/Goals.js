import React, { Component } from "react"
import PropTypes from 'prop-types'

// import HabitEntry from './HabitEntry'

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csrfToken: props.CsrfToken,
      goals: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/goals")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            habits: result.habits
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  // isChecked = id => {
  //   fetch("/api/v1/habits/" + id, {
  //     method: "put",
  //     headers: {
  //       "X-Requested-With": "XMLHttpRequest",
  //       "X-CSRF-Token": this.state.csrfToken
  //     },
  //     credentials: "same-origin"})
  //   .then(res => res.json())
  //   .then(
  //     (result) => {
  //       this.setState({
  //         isLoaded: true,
  //         habits: result.habits
  //       })
  //     },
  //     (error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error
  //       });
  //     }
  //   )
  // }

  render() {
    const contextThis = this
    return (
      <div>
        <h1>Goals</h1>
      </div>
    );
  }
}

Goals.propTypes = {
  CsrfToken: PropTypes.string.isRequired
}

export default Goals
