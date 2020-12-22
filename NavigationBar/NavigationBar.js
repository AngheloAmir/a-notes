/*
	NavigationBar is a component that sets the menus in the navbar
	
*/

import React from 'react';
import './style.css';

//StateAPI imports
import { contextProvider } from '../StateAPI/contextProvider';
import { setQuizState, setFilename, loadDefault, setSearchText, sortShelf, setStatusDefault } from '../StateAPI/Actions';

//component Imports
import NavResponsive from '../ColorBlueUI/NavResponsive';
import DialogFileSelect from './DialogFileSelect';
import DialogAbout from './DialogAbout';

import { FileDownloader } from '../Lib/FileDownloader';

export default function NavigationBar() {
	const { state, dispatch } = React.useContext( contextProvider );
	const [show, setshow] = React.useState( false );
	const [showdi, setdi] = React.useState( false );
	
	function handleQuiz() {
		dispatch( setQuizState(!state.status.isOnQuiz) );
	}
	
	function handleFileDownload() {
		let name = prompt("Enter filename: ", state.meta.filename);
		if( !name || name.length <= 0 ) return;
		const data = {
			filename: name,
			shelf: state.shelf
		}
		FileDownloader( data.filename + ".rv1", JSON.stringify(data) );
		dispatch( setFilename(name) );
	}
	
	function handleCreateNew() {
		if( confirm("Create new file?") )
			dispatch( loadDefault() ) ;
	}
	
	function handleSort() {
		if( confirm("Sort your notes alphabetically?") ) {
			//call setStatusDefault to set status of the program to default (which close open books, dialogs and so fort..).
			dispatch( setStatusDefault() );
			dispatch( sortShelf() );
		}
	}
	
	const menus = {
		title: "A!Notes",
		items: [
			{ name: "Start/End Quiz", 			callback: handleQuiz },
			{ name: "File Menu", 
				items: [
					{ name: "Load From Disk",  callback: () => setdi(true)  },
					{ name: "Download", 			callback: handleFileDownload },
					{ name: "Create New", 		callback: handleCreateNew },
				]
			},
			{ name: "Sort Files", 
				items: [
					{ name: "By Name", callback: handleSort  }
				]
			},
			{ name: "About", callback: () => setshow(true) },
		]
	};
	
	function handleSearch( word ) {
		if( word !== undefined && word.length >= 2 )
			dispatch( setSearchText(word, true) );
	}
	
	return (
		<div id="nav">
			<NavResponsive menus={ menus } onsearch={ handleSearch } />
			<DialogAbout show={ show } setshow={ setshow } />
			<DialogFileSelect show={ showdi } setshow={ setdi } />
		</div>
	);
}