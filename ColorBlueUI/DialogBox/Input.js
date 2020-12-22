import React from 'react';

export default function Input( {prop} ) {
	const textref = React.useRef();
	
	const ref = React.useRef();
	React.useEffect( () => {
		let ypos = ( window.innerHeight - ref.current.scrollHeight ) / 2;
			  ypos = ( ypos - ( ypos / 3.8 ) ) + "px";
		ref.current.style.top = ypos;
		let xpos = ( window.innerWidth - ref.current.scrollWidth ) / 2;
			  xpos += "px";
		ref.current.style.left = xpos;
		ref.current.style.display = "grid";
		ref.current.style.opacity = 1;
		
		textref.current.value = prop.value ? prop.value : '';
	}, []);
	
	const handleClickCancel = e => {
		e.stopPropagation();
		prop.onclose();
	}
	
	const handleClickOk = e => {
		e.stopPropagation();
		prop.onok( textref.current.value );
	}
	
	return (
		<div id="dialog-box-container" ref={ ref } >
			<div id="dialog-heading" className="navbar-color heading-color">
				{ prop.title }
			</div>
			<div id="dialog-content-text" className="background text-color">
				{ prop.msg }
				<div >
					<input id="dialog-text-input" type="text" placeHolder={prop.placeholder} ref={ textref } />
				</div>
			</div>
			<div id="dialog-button-confirm" className="background">
				<button className="text-color" onClick={ handleClickCancel } > Cancel</button>
				<button className="text-color" onClick={ handleClickOk } >  OK </button>
			</div>
		</div>
	);
}


