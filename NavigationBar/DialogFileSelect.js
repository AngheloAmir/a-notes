/*
	A container for showing a file input and handle the file loading
*/

import React from 'react';

import { contextProvider } from '../StateAPI/contextProvider';
import { setDataShelf } from '../StateAPI/Actions';

import DialogBox from '../ColorBlueUI/DialogBox';

export default function DialogFileSelect( {show, setshow} ) {
	const { dispatch } = React.useContext( contextProvider );
	
	const handleLoadFile = data => {
		dispatch( setDataShelf(data) );
	}
	
	return (
		<React.Fragment>
			{
				show ?
					<DialogBox
						type="fileinput"
						extension="rv1"
						setstate={ handleLoadFile }
						onclose={ () => setshow(false) }
					/>
					:
					''
			}
		</React.Fragment>
	)
}