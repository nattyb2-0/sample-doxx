import React from 'react'
import {NavLink} from 'react-router-dom'

//functional component
const SignedInLinks = (props) =>{
	return(
		<ul className='right'>
			<li><NavLink to='/createproject'>Create Project</NavLink></li>
			<li><NavLink to='/'>Log Out</NavLink></li>
			<li><NavLink to='/' className='btn btn-floating pink lighten-1'>NBD</NavLink></li>
		</ul>

		)
}

export default SignedInLinks	