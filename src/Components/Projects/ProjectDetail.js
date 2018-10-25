import React from 'react'
import {connect} from 'react-redux'
import{firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

//functional component
const ProjectDetail = (props) =>{
	//get the paramater id from props passed down from react-router
	let id = props.match.params.id
	console.log(props)
	console.log('yep')

	if(props.project){
		console.log(props.project.authorFirstName)
		return(
		<div className='container section project-details'>
			<div className='card z-depth-0'>
				<div className='card-content'>
					<span className='card-title'>Project Title - {props.match.params.id}</span>
					<p>{props.project.content}</p>
				</div>
				<div className='card-action gret lighten-text-4 grey-text'>
					<div>posted by {props.project.authorFirstName} {props.project.authorLastname}</div>
					<div>december 4, 2018 </div>
				</div>
				
			</div>
		</div>
	)

	}else{
		return(
			<div className='container center'> 
				<h1>Loading please wait.........</h1>
			</div>
			)
	}
	
	
}

const mapStateToProps = (state, ownProps)=>{
	const id = ownProps.match.params.id
	const projects = state.firestore.data.projects
	const project = projects ? projects[id] : null
	return {
		project: project
	}
}

export default compose(
		connect(mapStateToProps),
		firestoreConnect([
			{collection: 'projects'}
			])
		)(ProjectDetail)	