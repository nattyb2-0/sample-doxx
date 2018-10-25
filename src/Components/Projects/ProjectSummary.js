import React from 'react'
import {Link} from 'react-router-dom'

//functional component
const Project = (props) =>{
	
	let link = `/projects/${props.project.id}`
	return(
		<div className='card z-depth-0 project-summary'>
			<div className='card-content grey-text text-darken-3'>
				<Link to={link}><span className='card-title'>{props.project.title}</span></Link>
				<p>Posted By {`${props.project.authorFirstName} ${props.project.authorLastname}`}</p>
				<p className='grey-text'>September 24, 2018</p>
			</div>
		</div>

	)
}

export default Project	