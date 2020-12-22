/*COLORBLUEDOC
>DESCRIPTION
>APPEAR-WHEN
>FUNCTIONALITY
>PROP
	Does not accept prop
>TYPE
	Parent element
>STATE-DEPENDENCY
	None but less reusable
>PARENT-COMPONENT
>PARENT-ELEMENT
>DEMO
>CHANGE-LOG
	v1 release Oct, 2020
>NOTES
*/

import React from 'react';
import './index.css'

//StateAPI
import { contextProvider }  from './StateAPI/contextProvider';
import { rootReducer } from './StateAPI/rootReducer';
import { defaultState } from './StateAPI/State';

import NavigationBar from './NavigationBar/NavigationBar';
import SearchScreen from './Screen_Search/SearchScreen';
import QuizScreen from './Screen_Quiz/QuizScreen';
import Screen from './Screen_Main/Screen';

export default function App() {
	var appstate;
	try {
		if( window.localStorage ) {
			if( window.localStorage.getItem('reviewerapp1.1-shelf') )
				appstate = {
					...defaultState,
					meta: {
						filename: window.localStorage.getItem('reviewerapp1.1-name')
					},
					shelf: 
						JSON.parse( window.localStorage.getItem('reviewerapp1.1-shelf') )
				}
			else {
				window.localStorage.setItem('reviewerapp1.1-shelf', JSON.stringify( defaultState.shelf ));
				window.localStorage.setItem('reviewerapp1.1-name', defaultState.meta.filename);
				appstate = defaultState;
			}
		}
	}
	catch (err) {
		alert("Failed to load save data from apps local storage. Reason: " + err );
		appstate = defaultState;
	}
	
	window.onbeforeunload = function() {
		return "Close reviewer app?";
	}
	
	const [state, dispatch] = React.useReducer(rootReducer,  appstate );
	
	function whichScreen() {
		if( state.status.isOnSearch )
			return <SearchScreen />
		else if( state.status.isOnQuiz )
			return <QuizScreen />
		else
			return <Screen />
	}
	
	return (
		<div id="App">
			<contextProvider.Provider value={{state, dispatch}}>
				<NavigationBar />
				{
					whichScreen()
				}
			</contextProvider.Provider>			
		</div>
	);
}

