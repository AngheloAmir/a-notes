/*
	Show the settings available during the welcome screen phase of quiz
	and handle them respectively
*/

import React from 'react';
import './style.css';

import SettingItem from './SettingItem';

export default function Settings( prop ) {
	function handleOrder() {
		prop.setstate( {
			...prop.state, isIncludeOrder: !prop.state.isIncludeOrder
		});
	}
	
	function handleBelong() {
		prop.setstate( {
			...prop.state, isIncludeBelong: !prop.state.isIncludeBelong
		});
	}
	
	return (
		<div id="quiz-settings">
			<SettingItem
				text='Includes "#num to" question'
				checked={ prop.state.isIncludeOrder }
				callback={ handleOrder }
			/>
			<SettingItem
				text='Includes "belong to" question'
				checked={ prop.state.isIncludeBelong }
				callback={ handleBelong }
			/>
		</div>
	);
}