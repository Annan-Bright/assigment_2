import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Users from "./components/Users";
import AddUserForm from "./components/AddUserForm";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: "Bright Annan",
          email: "brightannan5@gmail.com",
          gen: 16,
          id: "fglgfllfg545874",
        },

        {
          name: "Ronald Amoo",
          email: "bustorme@gmail.com",
          gen: 17,
          id: "rgdfkffko5468",
        },

        {
          name: "Seyram Hormeku",
          email: "hormekuseyram@gmail.com",
          gen: 15,
          id: "rgplopkf3554",
        },
      ],
    };
  }
  addNewUser = (user) => {
    user.id = Math.random().toString();
    this.setState({
      users: [...this.state.users, user],
    });
  };
  deleteUser = (id) => {
    let undeletedUsers = this.state.users.filter((user) => user.id !== id);
    console.log(undeletedUsers);
    this.setState({
      users: undeletedUsers,
    });
  };
  editUser = (id, updatedUser) => {
    this.setState({
      users: this.state.users.map((user) =>
        user.id === id ? updatedUser : user
      ),
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>Add Users</h4>
              <br />
              <AddUserForm addUser={this.addNewUser} />
            </Col>
            <Col>
              <h4>All Codetrain Users</h4>
              <br />
              <Users
                userData={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
