import React from 'react';
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectActions'

class CreateProject extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			title: '',
			content: ''
		}

		
	}

	handleChange = (e)=>{
			this.setState(
			{
				[e.target.id]: e.target.value
			}
		)
	}

	handleSubmit = (e)=>{
		e.preventDefault()
		this.props.createProject(this.state)
		// this.props.createProject(this.state.title)
		this.setState({
			title:'',
			content: ''
		})
	}

	render(){
		return(
			<div className='container'>
				<form className='white' onSubmit={this.handleSubmit}>
					<h5 className='grey-text text-darken-5'> CREATE PROJECT</h5>
					<div className='input-field'>
						<label htmlFor="title">Title</label>
						<input type='text' id='title' onChange={this.handleChange} value={this.state.username}/>
					</div>
					<div className='input-field'>
						<label htmlFor="content">Content</label>
						<textarea id='content' className='materialize-textarea' onChange={this.handleChange} value={this.state.password}/>
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-0'>Create Project</button>
					</div>

				</form>
			</div>


			)
	}
} 

const matchDispatchToProps = (dispatch)=>{
	return {
		createProject: (project) => dispatch(createProject(project))
	}
	

}

export default  connect(null, matchDispatchToProps)(CreateProject)