import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

//functional component
const NavBar = (props) =>{
 /* need to write conditional statement to determine if user signed in
 and which links to show in navbar based on whether user signed in or not */
	return(
		<nav className='nav-wrapper grey darken-3'>
			<div className='container'>
				<Link to='/' className='brand-logo'> Natty Plan </Link>
				<SignedInLinks/>
				<SignedOutLinks/>

			</div>
		</nav>

		)
}

export default NavBar	