export const createProject = project =>{
	//make async call to db
	return (dispatch, getState, {getFirebase, getFirestore}) => {
		console.log(getFirestore)

		const firebase = getFirestore()
		console.log(firebase)
		firebase.collection('projects').add({
			title: project.title,
			content: project.content,
			authorFirstName: 'Natty',
			authorLastname: 'Davis',
			authorID: 12345,
			createdAt: new Date()
		}).then( ()=>{
			dispatch({
			type: 'CREATE_PROJECT',
			project: project
		})
		}).catch(err =>{
			console.log(err)
			dispatch({
				type: 'CREATE_PROJECT_ERROR',
				error: err
			})
		})
		
	}
}