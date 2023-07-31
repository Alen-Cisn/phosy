import { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Transition } from 'react-transition-group';
import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import DialogBox from './DialogBox';
import './Header.css';
import mainLogo from '../resources/phosy.png';
import { changeLang } from '../slices/configurationSlice';


function Header() {
	const configuration = useSelector((state) => state.configuration);
	const dispatch = useDispatch();
	const nodeRef = useRef(null);

	const [actionState, setActionState] = useState({action: false, currLang: configuration.langSettings.lang});


	function handleLangChange(e) {
		setActionState({action: true, currLang: e.target.value});
	}
	async function doneChangeLang() {
		dispatch(changeLang(actionState.currLang));
		setActionState({action: false, currLang: actionState.currLang});
	}
	function handleKeyDown (event) {
		if (event.key === 'Escape' || event === true) {
			setActionState({action: false, currLang: configuration.langSettings.lang});
		}
	}	

	function handleClick() {
		setActionState({action: true, currLang: configuration.langSettings.lang});
	}

	return (
		<div className='Header'>
			<img src={mainLogo} className='mainLogo' alt="phosy"/>
			<div className='rightSideHeader'>
				<i className='fa-solid fa-user fa-language translations' onClick={handleClick}/>
				<div className='credits'>
					Ian Cisneros
				</div>
			</div>
			
			<DialogBox show={actionState.action} handleKeyDown={handleKeyDown.bind(this)} handleDone={doneChangeLang.bind(this)}>
				<label htmlFor='translation' className='translationLabel'>
					Choose language
				</label>
				<select id='translation' onChange={handleLangChange} defaultValue={configuration.langSettings.lang}>
					<option value="de">
						Deutsch
					</option>
					<option value="en">
						English
					</option>
					<option value="es">
						Español
					</option>
				</select>
				
			</DialogBox> 
		</div>
	);
}

export default Header;
