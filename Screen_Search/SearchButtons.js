import React from 'react';
import './style.css';

import { contextProvider } from '../StateAPI/contextProvider'; 
import { setSearchState } from '../StateAPI/Actions';

import Button from '../ColorBlueUI/Button';

export default function SearchButtons() {
	const { dispatch } = React.useContext( contextProvider );
	
	return (
		<React.Fragment>
			<Button name="Ok" callback={ () => dispatch(setSearchState(false)) } />
		</React.Fragment>
	);
}
