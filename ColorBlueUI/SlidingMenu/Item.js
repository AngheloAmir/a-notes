import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

import MoreItems from './MoreItems';

export default function Item( {item, closeCallback} ) {
	const [ isVisible, setVisible ] = React.useState( false );
	
	function handleClick( e ) {
		e.stopPropagation();
		if( item.items ) setVisible( !isVisible );
		else if(item.callback) {
			item.callback();
			closeCallback();
		}
	}
	
	function close() {
		closeCallback();
	}
	
	function hideThis() {
		setVisible( false );
	}
	
	return (
		<div id="items" 
			onClick={ e=> handleClick(e) } onMouseLeave={ e => hideThis()}>
			<div>
				<p className="nav-dropdown-item">
					{ item.name } 
					{ item.items  ? <div className="right-arrow"> > </div>: "" }
				</p>
				{
					item.items  && isVisible ? 
					<MoreItems items={item.items} closeCallback={close} hide={hideThis}/>: ""
				}
			</div>
		</div>
	);
}