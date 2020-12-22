import React from 'react';

import CheckboxContainer from './Checkbox/CheckboxContainer';

export default function Checkbox( {check, callback} ) {
	return (
		<CheckboxContainer check={check} callback={callback} />
	);
}

