import React from 'react';
import './style.css';

import Checkbox from '../../../ColorBlueUI/Checkbox';

export default function SettingItem( prop ) {
	return (
		<div className="item">
			<Checkbox check={ prop.checked } callback={ prop.callback } />
			<div className="text">
				{ prop.text }
			</div>
		</div>
	);
}