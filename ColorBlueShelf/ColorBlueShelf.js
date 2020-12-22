/*
	ColorBlueShelf is a framework component that provide a simple file system feels.
	However, it is limited to 2 levels of directory. 
	It aimed toward providing Shelf alike where there is books and when it opens,
	there is bunch of pages with it.

	It is created to be reusable as much as possible, but if the state is from a context provider
	it cannot be passed as prop to this component.
	
	example:
		const { state, dispatch } = React.useContext( mycontext );
		return (
			<ColorBlueShelf shelf={ state} ... />
		
	** the above code will work but the parent component will stuck on having the initial state.
	The fix for this is to EDIT this file so it will ENUMERATE ( .map() ) from the state.

DEMO======================================================
	export const mycontext = React.createContext();
	
	function reducer( state, action ) {
		//code here....
	}
	
	const initialState = {
		shelf: [
			{
				name: " book", 									//The name of the book
				image: "/image.png", 						//(optional) The location of image
				//imageAt: 1										//(optional) If the image is stored as array of base64 in js file, tells the index of it
				//callback: true, 								 //(optional) when defined in a book only, clicking this item calls a bookOpenCallback
				//nooption: true, 								 //(optional) when defined, there is NO option button (...) for this item. 
				items: [												 //an array of items in this example, there is only one item
					{
						name: "page",
						image: "/pageimage.png",  	 //(optional) The location of image
						//imageAt: 2							  //(optional) If the image is stored as array of base64 in js file, tells the index of it
					},
				] //end of items object
			} //end of book object
		]//end of shelf array
	}//end of initialState
	
	export default function App() {
		const [state, dispatch] = React.useReducer( reducer, initialState );
		
		return (
			<div id="app>
				<mycontext.Provider value={{state, dispatch}}>
					<Wrapper />
				</mycontext.Provider>
			</div>
		);
	}
	
	function Wrapper() {
		const { state, dispatch } = React.useContext( mycontext );
		
		const Image = [
			require('./image1.png'), require('./image2.png'), require('./image3.png')	
		];
 
		function pageOpen( bookindex, pageindex) {
			alert("book is being opened at: " + bookindex + ", " + pageindex );
		}
		
		function optionOpen( bookindex, pageindex ) {
			if( pageindex === undefined )
				alert("book option is opened at: " + bookindex );
			else
				alert("page option is opened at: " + bookindex + ", " + pageindex );
		}
		
		function openBook( bookindex ) {
			alert("You have clicked add book at: " + bookindex);
		}
				
		return (
			<div id="wrapper">
				<ColorBlueShelf
					pageOpenCallback={ pageOpen }	 	//REQUIRED
					optionOpenCallback= {  optionOpen }   //REQUIRED
					bookOpenCallback={ openBook }		  //optional
					imageList={ Image }								//optional
				/>
			</div>
		);
	}

	*** as seen in the demo, the user of the component should provide the capabilities
	of viewing the page content and what option will be displayed.
	*** therefore, the file management code must build by user of the component too.
	*** It is because this componet focus on UI rendering only
	*** REMEMBER TO EDIT this FILE ONLY(ColorBlueShelf.js) so it can use the state
	
*/


import React from 'react';
import './style.css';

//StateAPI imports==================
import { contextProvider } from '../StateAPI/contextProvider';

import ShelfItem from './ShelfItem';

export default function ColorBlueShelf( prop ) {
	const { state } 					  = React.useContext( contextProvider );
	const [bookopen, setopen] = React.useState( -1 );
	
	//use effect code below is added for Reviewer App to fix crash
	//it happen that bookopen is set to some value althought there is no currently
	//available book, since books were deleted
	React.useEffect( () => {
		if( state.shelf.length <= 1 )
			setopen(-1);
		else if( state.status.bookIndex > -1)
			setopen( state.status.bookIndex );
		else
			setopen(-1);
	}, [state.shelf])
	
	return (
		<div id="colorblueshelf">
			{
				state.shelf.map( (item, headIndex) => {
					return (
						<ShelfItem
							headIndex={headIndex}
							item={ item }
							bookopen={ bookopen }
							setopen={ setopen }
							prop={ prop }
						/>
					)
				})
			}
		</div>
	);
}