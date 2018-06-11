import React, { Component } from "react"
import PropTypes from 'prop-types'

import HabitEntry from './HabitEntry'

class Habits extends Component {
  constructor(props) {
    super(props);
    this.state = {
      csrfToken: props.CsrfToken,
      habits: []
    }
  }

  componentDidMount() {
    fetch("/api/v1/habits")
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

  isChecked = id => {
    fetch("/api/v1/habits/" + id, {
      method: "put",
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        "X-CSRF-Token": this.state.csrfToken
      },
      credentials: "same-origin"})
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          habits: result.habits
        })
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    const contextThis = this
    return (
      <ul>
        {this.state.habits.map(function( habit, index ) {
           return <HabitEntry
                    key={ index }
                    id={ habit["id"] }
                    name={ habit["name"] }
                    handleChecked={ contextThis.isChecked } />
        })}
      </ul>
    );
  }
}

Habits.propTypes = {
  CsrfToken: PropTypes.string.isRequired
}

export default Habits
