import React from 'react';
import './style.css';

import { contextProvider } from '../../StateAPI/contextProvider';

import PageView from './Components/PageView';
import PageEdit from './Components/PageEdit';
import PageButtons from './Components/PageButtons';

export default function PageContainer() {
	const { state } = React.useContext( contextProvider );
	
	return (
		<React.Fragment>
			{
				state.status.isPageEdit ?
					<React.Fragment>
						<PageEdit />
						<PageButtons />
					</React.Fragment>
				:
					<React.Fragment>
						<PageView />
						<PageButtons />
					</React.Fragment>
			}
		</React.Fragment>
	);
}