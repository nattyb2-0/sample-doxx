import React, { Component } from 'react';
import Notifications from './Notification'
import ProjectListContainer from '../Projects/ProjectListContainer'
//IMPORT CONNECT TO CONNECT APPLICATION TO REDUX STAORE
import {connect} from 'react-redux'
import{firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

//dashboard now gets props because the state has been mapped to props with connect
class DashBoard extends Component {
  constructor(props){
    super(props);
  }

  render() {
   const projects = this.props.projects
    return (
      
        <div className='dashboard container'>
          <div className='row'>
            <div className='col s12 m6'>
              <ProjectListContainer project={projects}/>
            </div>
            <div className='col s12 m6 offset-1'> 
              <Notifications/> 
            </div>
          </div>
        </div>
      
    );
  }
}

//state object that is being passed in as parameter is from the root reducer on create store
const mapStateToProps = (state)=>{
  
  return {
    projects : state.firestore.ordered.projects||state.project.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(DashBoard);
