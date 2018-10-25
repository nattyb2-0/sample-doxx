 import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//applyMiddleware allows redux to use middlewares
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
// thunk act as middleware allowing you to do async calls
import thunk from 'redux-thunk'

import {reactReduxFirebase, getFirebase} from 'react-redux-firebase'
import {reduxFirestore, getFirestore} from 'redux-firestore'

import rootReducer from './store/reducers/rootReducer'
import firebaseConfig from './config/firebaseconfig'

const store = createStore(rootReducer, 
	compose(applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
		reactReduxFirebase(firebaseConfig),
		reduxFirestore(firebaseConfig)
	)
);



ReactDOM.render(<Provider store={store} >
					<App /> 
				</Provider>, document.getElementById('root'));
registerServiceWorker();
