import React, { Component, Fragment } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Auth } from 'aws-amplify';
import Routes from './Routes';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
    };
  }

  async componentDidMount() {
    try {
      if (await Auth.currentSession()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      if (e !== 'No current user') {
        alert (e);
      }
    }
    this.setState({
      isAuthenticating: false
    })
  }

  handleLogout = async event => {
    await Auth.signOut();
  
    this.userHasAuthenticated(false);
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar fluid collapseOnSelect> 
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav pullRight>
            {this.state.isAuthenticated
              ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
              : <Fragment>
                  <LinkContainer to="/signup">
                    <NavItem>Signup</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
            }  
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes 
          childProps={ childProps }
        />
      </div>
    );
  }
  
}

export default App;
