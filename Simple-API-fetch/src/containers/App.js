import React, { Component } from "react";
import CardList from "../components/CardList";
import Navbar from "../components/Navigation/Navbar";
import Loader from "./loader";

class App extends Component {
  constructor() {
    super();
    this.state = {
      stuffs: [],
      searchfeild: "",
      isButtonClicked: false,
    };
  }

  onButtonSubmit = () => {
    this.setState({ isButtonClicked: true });
    this.forceUpdate();
    const timer = setTimeout(() => {
      fetch("https://reqres.in/api/users?page=1")
        .then((response) => {
          return response.json();
        })
        .then((users) => {
          this.setState({ stuffs: users.data });
        });
    }, 2000);
    return () => clearTimeout(timer);
  };

  onSearchChange = (event) => {
    this.setState({ searchfeild: event.target.value });
  };

  render() {
    const filteredStuffs = this.state.stuffs.filter((stuffs) => {
      return stuffs.first_name
        .toLowerCase()
        .includes(this.state.searchfeild.toLowerCase());
    });

    if (
      this.state.stuffs.length === 0 &&
      this.state.isButtonClicked === false
    ) {
      return (
        <>
          <Navbar
            onButtonSubmit={this.onButtonSubmit}
            isButtonClicked={this.state.isButtonClicked}
          />
          <br />
          <h1 className="tc">Press "get users" to get all details</h1>
        </>
      );
    } else if (this.state.stuffs.length === 0) {
      return (
        <>
          <Navbar onButtonSubmit={this.onButtonSubmit} />
          {/* <h1 className="tc">Loading...</h1> */}
          <Loader className="loader"></Loader>
        </>
      );
    } else {
      return (
        <>
          <Navbar onButtonSubmit={this.onButtonSubmit} />
          <div className="tc">
            <h1 style={{ textShadow: "250px" }}>Member Details</h1>
            <CardList stuffs={filteredStuffs} />
          </div>
        </>
      );
    }
  }
}

export default App;
