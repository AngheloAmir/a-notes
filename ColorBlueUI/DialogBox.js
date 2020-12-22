/*
	Show  a diaglog box
	
	Diaglog box whetther it will be show or not should be handle by the upper component
	
DEMO==================================================
	export default function App() {
		const [isShowMessageBox, setShowMessageBox] = React.useState( false );
		
		return (
			<div id="app">
				<button onClick={ e => setShowMessageBox(true) }> Click to show message </button>
					{
						isShowMessageBox ?
							<DialogBox type="message"
								title="Hello!"
								msg="Welcome to ColorBlueUI"
								onclose={ () => setShowMessageBox( false) } />
						:
						''
					}
			</div>
		);
	}
		
			
*/
		
import React from 'react';

import Message from './DialogBox/Message';
import Confirm from './DialogBox/Confirm';
import Input from './DialogBox/Input';
import Option from './DialogBox/Option';
import FileInput from './DialogBox/FileInput';
import Background from './DialogBox/Background';

export default function DialogBox( prop ) {
	
	function whichDialog() {
		switch( prop.type ) {
			case "confirm":
				return <Confirm prop={prop}/>
			case "input":
				return <Input prop={prop}/>
			case "option":
				return  <Option prop={prop} />
			case "fileinput":
				return <FileInput prop={prop} />
			default:
				return <Message prop={prop} />
		}
	}
	
	return (
		<React.Fragment>
			<Background onclose={ prop.onclose } />
			{
				whichDialog()
			}
		</React.Fragment>
	);
}