import React from 'react';
import './style.css';

//StateAPI imports==================
import { contextProvider } from '../../StateAPI/contextProvider';

import PageView from './Components/PageView';
import PageEdit from './Components/PageEdit';
import PageButtons from './Components/PageButtons';

export default function PageScreenView() {
	const { state } = React.useContext( contextProvider );
	const ref = React.useRef(); 
	
	React.useEffect( () => {
		if( state.platform.isAndroid ) return;
		let ua = navigator.userAgent;
		if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)) {
			if(/Chrome/i.test(ua)) 
				ref.current.style.height = ( ref.current.scrollHeight - 56 ) + "px";
		}
	}, [state.status.isPageEdit]);
	
	return (
		<React.Fragment>
		{
			state.status.isPageEdit ?
				<div id="view-mobile" ref={ref}>
					<div className="pageedit">
						<PageEdit />
					</div>
					<div className="btn">
						<PageButtons />
					</div>
				</div>
				:
				<div id="view-mobile" ref={ref}>
					<div className="pageview">
						<PageView/>
					</div>
					<div className="btn">
						<PageButtons/>
					</div>
				</div>
		}
		</React.Fragment>
	);
}