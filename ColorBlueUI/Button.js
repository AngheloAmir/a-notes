import React from 'react';

import ButtonContainer from './Button/ButtonContainer';

export default function Button( {name, callback} ) {
	return (
		<ButtonContainer name={name} callback={callback} />
	);
}

