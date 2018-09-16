import React, { Component } from 'react';
import "./Validator.css";

class Validator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      valid: true,
      userMsg: '',
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const emailCheck = /@./g.test(this.state.email);
    const passwordCheck = /[a-zA-Z0-9!@#\$%\^&*\)\(+=._-]{7,}$/g.test(this.state.password);

    // checks for @ and . in email address
    if (emailCheck === false) {
      this.setState(prevState => ({ userMsg: 'Not a valid email address.' }));
      // checks for at least 7 characters and special characters
    } else if (emailCheck === true && passwordCheck === false) {
      this.setState(prevState => ({ userMsg: 'Password must be at least 7 characters long and contain a number and one of the following special characters: ! @ # $ % ^ & * ( ) _ + - =', }));
    }
    // checks for matching passwords if the above conditions are met 
    else if (emailCheck === true && passwordCheck === true && this.state.valid === true && (this.state.password === this.state.passwordConfirm)) {
      this.setState(prevState => ({ userMsg: 'Valid!' }));
    } else {
      this.setState(prevState => ({ userMsg: 'Passwords do not match' }));
    }
  }

  render() {

    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
          <input type="password" name="passwordConfirm" placeholder="confirm password" onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <p>{this.state.userMsg}</p>
        </form>
      </div>
    );
  }
}

export default Validator;
