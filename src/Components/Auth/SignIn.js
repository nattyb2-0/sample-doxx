import React from 'react';


class SignIn extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
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
		this.setState({
			username:'',
			password: ''
		})
	}

	render(){
		return(
			<div className='container'>
				<form className='white' onSubmit={this.handleSubmit}>
					<h5> Log In</h5>
					<div className='input-field'>
						<label htmlFor="username">User Name</label>
						<input type='text' id='username' onChange={this.handleChange} value={this.state.username}/>
					</div>
					<div className='input-field'>
						<label htmlFor="password">Pass Word</label>
						<input type='password' id='password' onChange={this.handleChange} value={this.state.password}/>
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-0'>Log In</button>
					</div>

				</form>
			</div>


			)
	}
} 

export default SignIn