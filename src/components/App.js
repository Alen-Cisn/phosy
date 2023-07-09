import { IntlProvider } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';

import Header from './Header';
import ToolBox from './ToolBox';
import Display from './Display';
import './App.css';
import { changeLang } from '../slices/configurationSlice'

function App() {
	const dispatch = useDispatch();
	const configuration = useSelector((state) => state.configuration);


	async function handleLangChange(e) {
		dispatch(changeLang(e.target.value));
	}

	return (
		<IntlProvider
			locale={configuration.langSettings.lang}
			messages={configuration.langSettings.messages}>
			<div className='App'>
				<Header handleLangChange={handleLangChange.bind(this)} lang={configuration.langSettings.lang} />
				<ToolBox />
				<Display />
			</div>
		</IntlProvider>
	);
}

export default App;
