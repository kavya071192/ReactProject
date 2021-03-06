import React from 'react';

class LoginBox extends React.Component {
  
  // Accessing DOM refs using class based comonent
  
  handleSignIn(e) {
     e.preventDefault()
     let username = this.refs.username.value
     let password = this.refs.password.value
     this.props.onSignIn(username, password)
   }
   
   render() {
     return (
       <form onSubmit={this.handleSignIn.bind(this)}>
         <h3>Sign in</h3>
         <input type="text" ref="username" placeholder="enter you username" />
         <input type="password" ref="password" placeholder="enter password" />
         <input type="submit" value="Login" />
       </form>
     )
   }
 
 }
 
   export default LoginBox;