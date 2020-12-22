import React from 'react';
import './style.css';

export default function Confirm( {prop} ) {
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
	
	const handleClickCancel = e => {
		e.stopPropagation();
		prop.onclose();
	}
	
	const handleClickOk = e => {
		e.stopPropagation();
		prop.onok();
	}
	
	const getMessage = () => {
		const sentences = prop.msg.split("\n");
		return sentences.map( text => {
			return <p> { text } </p>
		});
	}
	
	return (
		<div id="dialog-box-container" ref={ ref } >
			<div id="dialog-heading" className="navbar-color heading-color">
				{ prop.title }
			</div>
			<div id="dialog-content-text" className="background text-color">
				{ getMessage()  }
			</div>
			<div id="dialog-button-confirm" className="background">
				<button className="text-color" onClick={ handleClickCancel } > Cancel</button>
				<button className="text-color" onClick={ handleClickOk } >  OK </button>
			</div>
		</div>
	);
}