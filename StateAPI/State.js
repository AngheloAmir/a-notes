//return the default state
//import { TodayDate } from './TodayDate';

export const defaultState = {
	meta: {
		filename: "my reviewer",
	},
	
	platform: {
		//this value is used if this app is going to be used in android web view (meaning converted to android app)
		//this value dont change during the course of the program
		isAndroid: true
	},
	
	/*The value of this attrubute is change in StateAPI/Reducers/statusReducer.js*/
	status: {
		/*Make sure that ONLY ONE of them is TRUE a time*/
		isOnSearch:		  false,
		isOnQuiz: 			  false,
		isPageOpen: 		false,
		isPageEdit:			false,
		
		//Make sure that ONLY ONE of these is TRUE a time
		//if true, should display a dialog box
		isAddBookOpen:  false,
		isAddPageOpen:  false,
		isOptionOpen: 	  false,
		isDetailShow:		false,	
		isRenameShow:    false,  
		isDeleteShow: 	  false,
		
		optionBookIndex: -1,			//tells what book index triggers the option button 
		optionPageIndex: -1,
		bookIndex: -1,
		pageIndex: -1,
		
		//in order to capture text feild input (since it is in different component),
		//the value of it has to be the ref of a textfield
		textfieldref: undefined,
		
		//search
		searchtext: "",
	},
	
	shelf: [
		{
			name: "Demo Book",
			imageAt: 0,
			created: "N/A",
			modified: "N/A",
			items: [
				{
					name: "Read Me",
					imageAt: 1,
					created: "N/A",
					modified: "N/A",
					content:
						"#First Keyword\n" +
						"description of the first keyword\n\n" +
						"#Second keyword\n" +
						"description of the second keyword\n\n" +
						
						"@An Unorderlist\n" +
						"*Item one\n" +
						"description of list one\n" +
						"*Item two\n" +
						"description of list two\n" +
						"@\n\n" +
						
						"&An Ordered List\n" +
						"*Step One \n" +
						"Description of step one\n" +
						"*Step Two\n" +
						"Description of step two\n" +
						"&\n\n" +
						
						"!Red keyword\n\n" +
						
						"-" +
						"\n" +
						"//Editing this is file is simple. To make a word hightighted, which know as the KEYWORD (in bold color), just add " +
						"a number sign (#) in the start of a line. Then add new line to it to have its description. " +
						"A keyword is a word you would normally remember when studying.\n\n" +
						
						"//Character @ marks the start of an UNORDERLIST and each item is start with STAR (*) to mark " +
						"that it was a keyword inside an unorder list. Then proceed with a description of this item.\n" +
						"//Character & marks the start of an ORDERLIST and each item is start with STAR (*) to mark " +
						"that it was a keyword inside an unorder list. Then proceed with a description of this item.\n\n" +
						
						"//This is syntax scheme is used in generating quiz automatically, and might requires proper " +
						"syntax or it cant generate a quiz at all. \n" +
						"//There are others syntax used but these are ignored during quiz generation.\n\n" +
						"#Exclamation point (!) \n" +
						"Marks the line in bold red\n\n" +
						"#Double back-slash (//) \n" +
						"Marks the line as a comment/\n" +
						"#Minus Sign(-)\n\n" +
						"Create a horizontal line, ignoring text from this line\n" +
						"#Dollar sign ($) followed by path\n" +
						"Load an image relative to the app path (works in web version)\n\n" +
						
						'Click "Edit" to see how things work or may start quiz! Have fun!'
				},
				{
					name: "Quiz Test",
					imageAt: 1,
					created: "N/A",
					modified: "N/A",
					content:
						"//Test your Knowledge! Try to review this weird page and start a QUIZ!!!\n\n" +
						"@Grocery List\n" +
						"*Apple\n" +
						"Make sure that it is not too ripe one\n\n"+
						"*Orange\n" +
						"Choose only shinny one\n\n" +
						"*Milk\n" +
						"Only Chocoboo brand one only\n\n" +
						"*Sugar\n" +
						"Choose the brand of  one Bushi\n" +
						"@\n\n" +
						
						"#Counter 101\n" +
						"Proceed to this counter when buying\n\n" +
						"#Cash one\n" +
						"Dont use credit card\n\n" +
						"#10am\n" +
						"The store open in this time\n\n" +
						"#8pm\n" +
						"Few were buying\n\n" +
						
						"-\n\n" +
						"$/test.png\n\n" +
						
						"@Dont buy\n" +
						"*green apple one\n" +
						"why would buy that?\n\n" +
						"*Old Milk\n" +
						"Ohhh\n\n" +
						"*Sugar free sugar\n" +
						"There is no free\n" +
						"@\n\n" +
						
						"//Steps\n" +
						"&Steps in buying\n" +
						"*Enter the market\n" +
						"*Find the item\n" +
						 "*Proceed to cashier\n" +
						"*Cheer and Wait\n" +
						"There is probability of long wait\n" +
						"*Pay and Done\n" +
						"&"
				},
				{
					name: "" , imageAt: 2, callback: true, nooption: true
				}
		 	]
		},
		{
			name: "" , imageAt: 2, callback: true, nooption: true
		}
	],
};