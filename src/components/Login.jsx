import React, { Component } from "react";

export class Login extends Component {
  render() {
    console.log();
    return (
      <div>
        <center> <br /><p className="text">Sample Login Form</p><br />
          <input id='firstName' type='text' /><br /><br />
          <input className='lastName' type='text' /><br /><br />
          <button id='login'>Login</button>
        </center>
      </div>
    )
  }
}
export default Login
