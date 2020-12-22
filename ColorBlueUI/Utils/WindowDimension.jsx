//import useWindowDimension from './Utils/WindowDimension';

//window dimension is a hook that obtain the width of the screen
import React from 'react';

function getWindowDimension() {
	const { innerWidth, innerHeight } = window;
	return {
		width: innerWidth, height: innerHeight
	};
}

export default function useWindowDimension() {
	const [windowDimension, setDimension] = React.useState( getWindowDimension() );
	
	function handleResize() {
		setDimension( getWindowDimension() );
	}
	
	React.useEffect( () => {
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize);
	}, []);
		
	return windowDimension;
	
}