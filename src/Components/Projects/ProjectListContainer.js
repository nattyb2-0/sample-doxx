import React from 'react'
import Project from './ProjectSummary'

//functional component
const ProjectListContainer = (props) =>{
	
	return(
		<div className='project-list-container section'>
			 {
				props && props.project.map(project => {
					return(
						<Project key={project.id} project={project}/>

						)
				})
			}
		</div>
	)
}

export default ProjectListContainer	