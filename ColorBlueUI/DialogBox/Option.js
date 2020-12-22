import React from 'react';
import './style.css';
import '../Utils/ColorScheme.css';

export default function Option( {prop} ) {
	const ref = React.useRef();
	React.useEffect( () => {
		let ypos = ( window.innerHeight - ref.current.scrollHeight ) / 2;
			  ypos = ( ypos - ( ypos / 4 ) ) + "px";
		ref.current.style.top = ypos;
		let xpos = ( window.innerWidth - ref.current.scrollWidth ) / 2;
			  xpos += "px";
		ref.current.style.left = xpos;
		ref.current.style.display = "grid";
		ref.current.style.opacity = 1;
	}, []);
	
	function handleClick(e, item, index) {
		e.stopPropagation();
		item.callback( index );
		prop.onclose();
	}
	
	return (
		<div id="dialog-box-option-container" ref={ ref }>
			<div id="dialog-heading" className="navbar-color heading-color">
				{ prop.title }
			</div>
			<div id="dialog-content-option" className="background">
				{
					prop.optionlist.map( (item, index) => {
						return <div id="dialog-option-item" className="nav-dropdown-item"
										onClick={ e=> handleClick(e, item, index) } > { item.name } </div>
					})
				}
			</div>
		</div>
	); //
}