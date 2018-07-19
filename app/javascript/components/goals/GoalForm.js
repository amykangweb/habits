import React, { Component } from "react"
import PropTypes from 'prop-types'

// import HabitEntry from './HabitEntry'

class GoalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csrfToken: props.CsrfToken
    }
  }

  createGoal = () => {
    alert('create Goal!')
    fetch("/api/v1/goals", {
      method: "post",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": this.state.csrfToken
      },
      credentials: "same-origin"})
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true
        })
        location.href = "/goals"
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
        <form>
          <button onClick={() => contextThis.createGoal()}>Add Goal</button>
        </form>
      </div>
    );
  }
}

GoalForm.propTypes = {
  CsrfToken: PropTypes.string.isRequired
}

export default GoalForm
