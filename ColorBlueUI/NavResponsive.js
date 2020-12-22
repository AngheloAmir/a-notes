import React from 'react';

import NavlistMenu from './NavlistMenu';
import SlidingMenu from './SlidingMenu';
import useWindowDimension from './Utils/WindowDimension';

export default function NavResponsive( {menus, onsearch} ) {
	const { width } = useWindowDimension(); 
	
	return (
		<React.Fragment>
			{
				width > 767 ?
					<NavlistMenu menus={ menus } onsearch={ onsearch } />
					:
					<SlidingMenu menus={ menus } onsearch={ onsearch } />
			}
		</React.Fragment>
	);
}
