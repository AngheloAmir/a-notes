import React from 'react';
import './style.css';

export default function ResultItem( {item} ) {
	return (
		<div className="item">
			Found in <b>{ item.bookname } > { item.pagename } </b>
			<br/>
			{
				item.result.map( resultitem => { 
					return <Keywords resultitem={ resultitem } />
				})
			}
		</div>
	);
}

function Keywords( {resultitem} ) {
	return (
		<div className="found-item">
			<div className="found-keyword">
				{ resultitem.keyword }
			</div>
			<div className="found-text">
				{ resultitem.text }
			</div>
		</div>
	);
}
