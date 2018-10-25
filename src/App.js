import React, { Component } from 'react';

// import browser router from react router libary
// to be able to use routing in react
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import NavBar from './Components/Layout/Navbar'
import DashBoard from './Components/Dashboard/Dashboard'
import ProjectListContainer from './Components/Projects/ProjectListContainer'
import ProjectDetail from './Components/Projects/ProjectDetail'
import SignIn from './Components/Auth/SignIn'
import SignUp from './Components/Auth/SignUp'
import CreateProject from './Components/Projects/Createproject'

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <NavBar />
          <Switch>
            <Route path='/' exact component={DashBoard}/>
            <Route exact path='/projects' component={ProjectListContainer} />
            <Route exact path='/projects/:id' component={ProjectDetail} />
            <Route path ='/login' component={SignIn} />
            <Route path ='/signup' component={SignUp} />
             <Route path ='/createproject' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
