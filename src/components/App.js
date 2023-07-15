import { IntlProvider } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import Header from './Header';
import ToolBox from './ToolBox';
import Display from './Display';
import './App.css';
import { changeLang } from '../slices/configurationSlice';

function App() {
	const dispatch = useDispatch();
	const configuration = useSelector((state) => state.configuration);
	
	useEffect( () => {
		dispatch(changeLang(window.navigator.language.substring(0, 2)));
	}, []);

	return (
		<IntlProvider
			locale={configuration.langSettings.lang}
			messages={configuration.langSettings.messages}>
			<div className='App'>
				<Header />
				<ToolBox />
				<Display />
			</div>
		</IntlProvider>
	);
}

export default App;
