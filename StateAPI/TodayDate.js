export function TodayDate() {
	let today = new Date();
	let month = "";
	switch( today.getMonth() ) {
		case 0: month = "Jan."; break; case 6: month = "Jul."; break;
		case 1: month = "Feb."; break; case 7: month = "Aug."; break;
		case 2: month = "Mar."; break; case 8: month = "Sep."; break;
		case 3: month = "Apr."; break; case 9: month = "Oct."; break;
		case 4: month = "May"; break; case 10: month = "Nov."; break;
		case 5: month = "Jun."; break; case 11: month = "Dec."; break;
		default: break;
	}
	
	let hour = today.getHours();
	let time = "";
	if( hour === 11 ) 		{ hour = 12; time = "pm" }
	else if( hour === 0 )   { hour = 12; time = "am" }
	else if( hour === 12 ) { hour = 1; time = "pm" }
	else if( hour > 11 )     { hour -= 12; time = "pm" }
	else  						  time = "am";
	
	let minutes = today.getMinutes();
	if( minutes <= 9 ) minutes = "0" + minutes;
	
	return `${month} ${today.getDate()}, ${today.getFullYear()} - ${hour}:${minutes} ${time}`;
}