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
      // didSubmit: false,
      minLength: true,
      userMsg: '',
    }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.originalState = this.state;
  }

  // reset = () => {
  //   this.setState(this.originalState);
  // }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // this.setState( prevState => ({
    //   didSubmit: !prevState.didSubmit,
    // }));

    // (this.state.password.length < 7 ? this.setState(prevState => ({ valid: !prevState.valid, userMsg: 'Password must be at least 7 characters long.', })) : this.setState(prevState => ({ minLength: !prevState.minLength })));

    this.setState(prevState => ({ valid: prevState.valid === true, minLength: prevState.minLength === true }));

    if (this.state.password.length < 7) {
      this.setState(prevState => ({ valid: prevState.valid === false, minLength: prevState.minLength === false, userMsg: 'Password must be at least 7 characters long.', password: prevState.password = '' }));
      console.log(this.state.valid);
      return this.state;
    } else if (this.state.valid === true && this.state.minLength === true && (this.state.password === this.state.passwordConfirm)) {
      this.setState(prevState => ({ userMsg: 'Valid!' }));
      return this.state;
    } else {
      this.setState(prevState => ({ valid: prevState.valid === true, userMsg: 'Passwords do not match' }));
      return this.state;
    }

    // console.log(this.state.valid);
    // // console.log(this.state.minLength);
    // console.log(this.state.password.length);
    // console.log(this.state.passwordConfirm.length);

    // ((this.state.valid === false && this.state.minLength === true && (this.state.password === this.state.passwordConfirm)) ? this.setState({ valid: true, userMsg: 'Valid!'}) : this.setState({ valid: false, userMsg: 'Passwords do not match' }));

    // if (this.state.valid === true && (this.state.password === this.state.passwordConfirm)) {
    //   this.setState(prevState => ({ userMsg: 'Valid!' }));
    //   return this.state;
    // } else {
    //   this.setState({ userMsg: 'Passwords do not match' });
    // }
    // event.preventDefault();


  }

  render() {
    // console.log(this.state.email);
    // console.log(this.state.password);
    // console.log(this.state.passwordConfirm);
    // console.log(this.state.password.length);

    return (
      <div className="form">
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" placeholder="email" onChange={this.handleChange} />
          <input type="password" name="password" placeholder="password" onChange={this.handleChange} />
          <input type="password" name="passwordConfirm" placeholder="confirm password" onChange={this.handleChange} />
          <button type="submit">Submit</button>
          <p>{this.state.userMsg}</p>
          {/* {(this.state.didSubmit === true && this.state.valid === true) && <p>Valid!</p>}
        {(this.state.didSubmit === true && this.state.valid === false) && <p>Passwords do not match</p>} */}
        </form>
      </div>
    );
  }
}

export default Validator;
