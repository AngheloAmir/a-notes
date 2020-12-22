
//Return file as json
//event = the event fired by onChange in <input type="file">
//fileextention = file extension that is allowed to be open
//functionThatSetTheState = this function should update the state
export function FileLoader(event, fileextention, functionThatSetTheState) {
		event.stopPropagation();
		event.preventDefault();
		var file = event.target.files[0];
		var reader = new FileReader();
	
		//Get the file extension first
		var fileExtension = file.name.substring(file.name.length
				- fileextention.length, file.name.length);

		//Check if the file has a valid file extension and then load
		if (fileExtension === fileextention) {
			reader.readAsText(file);
			reader.onload = function( eventdata ) {
					try {
						functionThatSetTheState( JSON.parse( eventdata.target.result ) );
						event.taget.files = [];
					} catch( err ) {
						throw new Error( "File corrupted");
					}
			}
		} else throw new Error("Not a valid file to be loaded");
}

function Error( msg ) {
	this.msg = msg;
	return this;
}