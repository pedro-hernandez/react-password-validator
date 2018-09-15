import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
constructor(props){
  super(props);
  this.state={
    email: '',
    password: '',
    passwordConfirm: '',
    valid: true,
    // value: '',
  };
  this.handleChange = this.handleChange.bind(this);
}

handleChange = (event) => {
  event.preventDefault();
  this.setState({
    [event.target.name]: event.target.value,
  });
  console.log(this.state.email);
}

handleSubmit = (event) => {
  event.preventDefault();
  this.setState({
    value: event.target.value,
  });
  (this.state.password === this.state.passwordConfirm ? this.setState({ valid: true,}) : this.setState({ valid: false,}) );
}

  render() {
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.passwordConfirm);
    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
        <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
        <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
        <input type="password" name="passwordConfirm" placeholder="confirm-password" onChange={this.handleChange}/>
        <button type="submit">Submit</button>
        <p>{`${this.state.valid}`}</p>
        </form>
      </div>
    );
  }
}

export default Validator;
