import React from "react";
import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
    name: "",
    id: '',
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch((error) => console.log(error));
  }

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmitName = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  handleChangeId = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmitId = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.persons.map((person) => (
            <li>{person.name}</li>
          ))}
        </ul>
        <form onSubmit={this.handleSubmitName}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChangeName} />
          </label>
          <button type="submit">Add</button>
        </form>
        <form onSubmit={this.handleSubmitId}>
          <label>
            Person ID:
            <input type="text" name="id" onChange={this.handleChangeId} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}
