/*
	AboutMessage is a component that handle
	whether DialogBox is show or not by means of its prop
	
	It also contain the actual info message
*/

import React from 'react';
import DialogBox from '../ColorBlueUI/DialogBox';

export default function DialogAbout( {show, setshow} ) {
	const msg = "A notebook app aimed at providing digital notebook. It features: \n" +
	"\n* Simplistic text editor" +
	"\n* Keyword highlighting" +
	"\n* Search function" +
	"\n* Generate questions" +
	"\n\nIt hopes that it becomes very usefull in studying, have fun!" +
	"\n-Amir, 2020";
	
	return (
		<React.Fragment>
			{ show ? <DialogBox title="About" msg={msg} onclose={ () => setshow(false) } /> : '' }
		</React.Fragment>
	);
}