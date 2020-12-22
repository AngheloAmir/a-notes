import React from 'react';
import './Renderer/style.css';

import { contextProvider } from '../StateAPI/contextProvider';

import P from './Renderer/P';
import IMG from './Renderer/IMG';

export default function Renderer() {

//CODE below are modified if using it to another program.
//state obtained from cotextprovider cannot be passed as prop or error will occur
	const { state } = React.useContext( contextProvider );
	
	function render() {
		try {
			let temp = state.shelf[state.status.bookIndex].items[state.status.pageIndex].content.split( "\n");
			
			if( temp.length === 1 && temp[0].length === 0 )
				return <span style={{color: "gray"}}> ...empty... </span>
		
		//tells what is the last encountered keyword
		//used in determining the amount of indent of a text
		let block = '';
		let keycn ='';
		let cname = '';
		
		return (
				temp.map( text => {
				//line break
					if( text.length <= 0 )
						return <br />
					
				//comment
					if( text[0] === "/" &&   text[1] === "/" )
						return <p className="comment"> { text } </p>
					
				//check if monospace is in effect
					if( block === ">" && text[0] !== ">")
						return <p className="monospace"> { text } </p>
						
					switch( text[0] ) {
						case "#":
							keycn = "pkeyword"; //this set the className will be use in the <p> in the default: statement
							return <P cn="keyword" text={text} />
						
						case "!":
							keycn = ''; //this set the className to empty that will be use in <p> in the default: statement
							return <P cn="redkeyword" text={text} /> 
						
						case "$":
							keycn = '';
							return <IMG src={ text } />
						
						case "-":
							return <hr className="cbhr" />
						
						case "@":
							keycn = 'pkeyword'; block = block === '@' ? '' : '@';
							return <P cn="keyword" text={text} /> 
							
						case "&":
							keycn = 'pkeyword'; block = block === '&' ? '' : '&';
							return <P cn="keyword" text={text} /> 
						
						case ">":
							keycn = 'monospace'; block = block === '>' ? '' : 'monospace';
							return <P cn="monospace" text={text} /> 
							
						case '*':
							if ( block === '@' ) {
								 keycn = 'unorder-des';
								 return <P cn="unorder-item" text={text} />
							}
							else if( block === '&' ) {
									keycn = 'order-des'; 
									return <li className="order-item"> { text.substring(1, text.length )  } </li>
							}
							keycn = "pkeyword";
							return <P cn="keyword" text={text} />
						
						default:
							cname = keycn; keycn = '';
							return <p className={ cname }> { text } </p>
					}//swicth
				})//map
			);//return
		}
		catch(err) {
			return <span style={{color: "red"}}> cant render the file </span> ;
		}
	}
	
	return (
		<div id="cbfr">
			{ render() }
		</div>
	);
}
