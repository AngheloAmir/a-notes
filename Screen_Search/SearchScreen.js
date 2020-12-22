/*COLORBLUEDOC
>DESCRIPTION
	Parent element that display the result of search done by the user

>APPEAR-WHEN
	The user types a text in the search bar and then press search( go )
	
>FUNCTIONALITY
	Handles the search generation and then renders an child component
	that will display the search result.
	
>PROP
	Does not accept prop

>TYPE
	Parent element - container
	
>STATE-DEPENDENCY
	*state.shelf
	
	*state.status.searchtext
		Before the SearchScreen is displayed, this value must not be undefined

>PARENT-COMPONENT
	App.js

>PARENT-ELEMENT
	<div id="App">
	
>CHANGE-LOG
	v1 release Oct, 2020
	
*/
import React from 'react';
import './style.css';

import { contextProvider } from '../StateAPI/contextProvider';
import { colorBlueFileSearch } from '../ColorBlueFile/Search';

import Result from './Result';
import SearchButtons from './SearchButtons';

export default function SearchScreen() {
	const { state } = React.useContext( contextProvider );

	function generateSearch() {
		try {
			var searchresults = [];
				for( let i = 0; i < ( state.shelf.length - 1); i++)  {
					for( let j = 0; j < ( state.shelf[i].items.length -1 ); j++)  {
						const result = colorBlueFileSearch( state.shelf[i].items[j].content, state.status.searchtext, false );
						if( result.length > 0 )
							 searchresults.push({
								bookname: state.shelf[i].name,
								pagename: state.shelf[i].items[j].name,
								result: result
							});
					}
				}
			return <Result result={ searchresults } />
		}
		catch( err ) {
			return <Result />
		}
	}
	
	const ref = React.useRef(); 
	React.useEffect( () => {
		let ua = navigator.userAgent;
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
			//used to adjust the screen vh in android Chorme, also known as 100vh bug which exist in chorme android
			if(/Chrome/i.test(ua)) 
				ref.current.style.height = ( ref.current.scrollHeight - 56 ) + "px";
		}
	}, []);
	
	return (
		<div id="search-screen" ref={ ref }>
			<div id="search-result-div">
				{ generateSearch() }
			</div>
			<div id="search-btn">
				<SearchButtons />
			</div>
		</div>
	);
}
