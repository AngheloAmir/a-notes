//Sort alphabetically

export function alphabetically( state ) {
	try {
		return sort( state );
	} catch( err) {
		alert( "Sorting failed! \nReason: \n" + err );
		return state;
	}
}

function sort( state ) {
	let container = [];
	let pagecon = [];
	
	let copy = [ ...state.books ];
	let temp = [];
	let name = "";
	let index = 0;
	
	//Sort the books first
	while( copy.length > 0 ) {
		index = 0; temp = [];
		name = "zzzzzzzzzz";
		
		//find the lowest one
		for(let x =0; x < copy.length; x++) {
			if( name.localeCompare( copy[x].name) === 1) {
				name = copy[x].name;
				index = x;
			}
		}
		//put the found lowest book name
		container.push( {...copy[index]} );
		//remove the find one
		for(let x =0; x < copy.length; x++) 
			if( x !== index ) temp.push( {...copy[x]} );
		copy = temp;
	}//while
	
	//sort all of the pages===========================================
	temp = []; let copypages = []
	name = "";
	index = 0;
	
	//look for each book
	for(let bookindex = 0; bookindex < container.length; bookindex++) {
		if( !container[bookindex].pages || container[bookindex].pages < 1 ) continue;
		copypages = [ ...container[bookindex].pages ];
		pagecon = [];
		
		while( copypages.length > 0 ) {
			index = 0; temp = []; 
			name = "zzzzzzzzzz";
			
			//find the lowest one
			for(let i =0; i < copypages.length; i++) {
				if( name.localeCompare( copypages[i].name) === 1) {
					name = copypages[i].name;
					index = i;
				}
			}
			//put the found lowest page name
			pagecon.push( {...copypages[index]} );
			//remove the find one
			for(let x =0; x < copypages.length; x++) 
				if( x !== index ) temp.push( {...copypages[x]} );
			copypages = temp;
		}//while
		
		//update the content of the container (which holds a sorted books)
		//to the sorted pages
		container[bookindex] = { ...container[bookindex], pages: pagecon }
	}//for
	
	return {
		...state, books: container
	}
}



