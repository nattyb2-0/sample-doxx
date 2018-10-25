const initState = {
	projects: [
		{id:1, title:'hello my friend', content:'sghjkagfgwuiagfuawgsdvchwgsfyiugvcsudvbhwavkefd'},
		{id:2, title:'the green house', content:'hqfghwevfhv3wufevhcvasbhjkdvcvwehafvuyckasdvhjvew'},
		{id:3, title:'foreset gump', content:'whjfvhwvefhcvwhuvfhcwvfyuvuwyevcuy3vwfuyvyu3wvfyuvwu'}

	]

}


const projectReducer = (state = initState, action)=>{
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project)
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('there is an error', action.err )
			return state;
		default :
			return state;
	}
	
}

export default projectReducer