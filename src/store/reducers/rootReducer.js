import authReducer from './authReducer'
import projectReducer from './projectReducer'


import {combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
	//PASS IN STATE FROM AUTH AND PROJECT REDUCER TO BE PROPS ON COMPONENTS
	auth: authReducer,
	project: projectReducer,
	firestore: firestoreReducer
})


export default rootReducer;