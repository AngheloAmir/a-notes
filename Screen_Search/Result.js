import React from 'react';
import './style.css';

import ResultItem from './ResultItem';

export default function Result( {result} ) {
	return (
		<div id="search-result">
			{
				result !== undefined && result.length > 0 ?
					<React.Fragment>
						{
							result.map( found => {
								if( found.result.length > 0 ) return <ResultItem item={ found } />
								return '';
							})
						}
					</React.Fragment>
					:
					"No result found"
			}
		</div>
	);
}
