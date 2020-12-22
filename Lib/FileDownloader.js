
//Filename and filedata are strings
export function FileDownloader( filename, filedata ) {
	var a = document.createElement("a");
		var file = new Blob( [ filedata ], {
			type : "text/plain"
		});
		a.href = URL.createObjectURL(file);
		a.download = filename;
		document.body.appendChild(a);
		a.click();
		setTimeout(function() {
			document.body.removeChild(a);
		}, 100);
}