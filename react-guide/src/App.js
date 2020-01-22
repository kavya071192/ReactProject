import React from 'react';
import reactDOM from 'react-dom';
import LoginBox from './LoginBox/LoginBox';
import styled from "styled-components";
import background from "./Images/background.png";

const BackgroundStyled = styled.div`
  background: url(${background}) 0 0 / cover no-repeat !important;
  min-height: 100vh !important;
  overflow: auto`;



const LoginPageStyled = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  background-color: lightblue;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 300px;
  padding: 50px;
  margin: 20px;
  align-items: center`;

const Welcome = ({user, onSignOut})=> {
  // stateless component
  return (
    <div>
      Welcome <strong>{user.username}</strong>!
      <a href="https://www.w3schools.com" onClick={onSignOut}>Sign out</a>
    </div>
  )
}


class App extends React.Component {
  
  constructor(props) {
    super(props)
    // setting initial state
    this.state = {
      user: null
    }
  }
  
  signIn(username, password) {
    // Calling setState to again render the whole app
    this.setState({
      user: {
        username,
        password,
      }
    })
  }
  
  signOut() {
    // Clearing state
    this.setState({user: null})
  }
  
  render() {
    return (
      <div>
        <BackgroundStyled>
        <LoginPageStyled>
        { 
          (this.state.user) ? 
            <Welcome 
             user={this.state.user} 
             onSignOut={this.signOut.bind(this)} 
            />
          :
            <LoginBox 
             onSignIn={this.signIn.bind(this)} 
            />
        }
        </LoginPageStyled>
        </BackgroundStyled>
      </div>
    ) 
  } 
}
reactDOM.render(<App/>, document.getElementById("root"));

export default App;