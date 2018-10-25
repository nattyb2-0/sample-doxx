import React from 'react';


class SignUp extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			username: '',
			email: "",
			password: ""
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
			username: "",
			password: "",
			email: ""
		})
	}

	render(){
		return(
			<div className='container'>
				<form className='white' onSubmit={this.handleSubmit}>
					<h5 className='grey-text text-darken-6'> Sign UP </h5>
					<div className='input-field'>
						<label htmlFor="username">User Name</label>
						<input type='text' id='username' onChange={this.handleChange} value={this.state.username}/>
					</div>
					<div className='input-field'>
						<label htmlFor="email">Email</label>
						<input type='email' id='email' onChange={this.handleChange} value={this.state.email}/>
					</div>
					<div className='input-field'>
						<label htmlFor="password">Pass Word</label>
						<input type='password' id='password' onChange={this.handleChange} value={this.state.password}/>
					</div>
					<div className='input-field'>
						<button className='btn pink lighten-1 z-depth-0'>Sign Up Now</button>
					</div>

				</form>
			</div>


			)
	}
} 

export default SignUp