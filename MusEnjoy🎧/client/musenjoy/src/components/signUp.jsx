import React, { Component } from "react";
import axios from 'axios'

export default class SignUp extends Component {

    // constructor(props){
    //     super(props);
              state = { name: '',
                       email: '',
                       pass: '',
                       repeat_pass: ''
      };
      
      handleChange = ( e) => {
        this.setState({ [e.target.name]: e.target.value });
     };
     submitHandler = e => {
       e.preventDefault()
     axios.post('/register', {name : this.state.name,
                              email: this.state.email,
                              pass: this.state.pass,
                              repeat_pass: this.state.repeat_pass                         
     })
            .then(res => {
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
      }

    // submitHandler = e => {
    //     e.preventDefault()
    //    fetch('http://localhost:3000/register' , {
    //        method: 'GET',
    //        headers: {
    //            'Content-Type': 'application/json'
    //        },
    //        body: JSON.stringify({
    //            name: this.state.name
    //        })
    //        }).then(res => {
    //            return res.json()
    //        })
    //        .then(data => console.log(data))
    //        .catch(error => console.log('ERROR'))  

    //     }

    render() {
        // const {name, email, pass, repeat_pass} = this.state;
        return (
            <form onSubmit = {this.submitHandler}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input type="text" className="form-control" placeholder="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Pass</label>
                    <input type="password" className="form-control" placeholder="Enter Pass" name="pass" value={this.state.pass} onChange={this.handleChange}/>
                </div>

                <div className="form-group">
                    <label>Repeat Pass</label>
                    <input type="password" className="form-control" placeholder="Enter Pass" name="repeat_pass" value={this.state.repeat_pass} onChange={this.handleChange}/>
                </div>

                <button  type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    }
}