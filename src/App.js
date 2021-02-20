import React from "react";
import "./App.css";
import UserItem from "./components/UserItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      users: [],
    };
  }
  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    this.setState({ users: [...this.state.users, newUser] });

    this.setState({ name: "", email: "", password: "" });
  };
  render() {
    return (
      <div className="App">
        {/* Form to add new user */}
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
            <br />
            <input type="submit" />
          </form>
        </div>

        {/* List of users */}
        <div>
          {this.state.users.map((user, index) => (
            <UserItem
              key={index}
              name={user.name}
              email={user.email}
              password={user.password}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
