import React from 'react';

export default function FileInput( { prop} ) {
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
	}, []);
	
	const handleClick = e => {
		e.stopPropagation();
		prop.onclose();
	}
	
	const handleLoad = event => {
		event.stopPropagation();
		event.preventDefault();
		var file = event.target.files[0];
		var reader = new FileReader();
		
		//Get the file extension first
		var fileExtension = file.name.substring(file.name.length
				- prop.extension.length, file.name.length);
		
		//Check if the file has a valid file extension and then load
		if (fileExtension === prop.extension) {
			reader.readAsText(file);
			reader.onload = function( eventdata ) {
					try {
						prop.setstate( JSON.parse( eventdata.target.result ) );
						//event.taget.files = [];
					} catch( err ) {
						alert( "Error during load: \n"  + err );
					}
			}
		} else alert("Not a valid file to be loaded");
		prop.onclose();
	}
	
	return (
		<div id="dialog-box-container" ref={ ref }>
			<div id="dialog-heading" className="navbar-color heading-color">
				{ prop.title }
			</div>
			<div id="dialog-content-text" className="background text-color">
				<p> Select a file </p>
				<input type="file" onChange={ handleLoad } />
			</div>
			<div id="dialog-button-message" className="background">
				<button className="text-color" onClick={ handleClick } > Cancel </button>
			</div>
		</div>
	);
}