import React, { Component } from "react";
import axios from 'axios'

export default class SignUp extends Component {

    constructor(props){
        super(props);
        this.state = { name: '',
                       email: '',
                       pass: '',
                       repeat_pass: ''
      };
      }
      handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };
    //   componentDidMount() {
    //  axios.post('http://localhost:3000/register')
    //         .then(res => {
    //             console.log(res)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    //   }

    submitHandler = e => {
        e.preventDefault()
        axios.post('/user', {
            name: this.state.name,
            email: this.state.email,
            pass: this.state.pass,
            repeat_pass: this.state.repeat_pass
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (err) {
            console.log(err);
          });
    }
      

    render() {
        const {name, email, pass, repeat_pass} = this.state;
        return (
            <form onSubmit = {this.submitHandler}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" className="form-control" placeholder="name" name="name" value={name} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={email} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Pass</label>
                    <input type="password" className="form-control" placeholder="Enter Pass" name="pass" value={pass} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Repeat Pass</label>
                    <input type="password" className="form-control" placeholder="Enter Pass" name="repeat_pass" value={repeat_pass} onChange={this.handleChange}/>
                </div>

                <button  type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}