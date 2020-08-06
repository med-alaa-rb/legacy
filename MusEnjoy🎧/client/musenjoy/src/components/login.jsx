import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", pass: "", redirected: false };
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      email: this.state.email,
      pass: this.state.pass,
    };
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => {
        var out = res.json();
        console.log(out, "AAAAA");
        //this.renderRedirect();
        this.props.history.push("/adminhomepage")
        return out;
      })

      //.then((data) => localStorage.setItem("token", data))
      .catch((error) => console.log("ERROR", error));
  };

  // setRedirect = () => {
  //   this.setState({
  //     redirected: true,
  //   });
  // };
  // renderRedirect = () => {
  //   if (true) {
  //     // this.state.redirect
  //     console.log("done");
  //     return <Redirect to="/adminhomepage" />;
  //   }
  // };
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="pass"
            value={this.state.pass}
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="btn btn-primary btn-block"
            
          >
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    );
  }
}
