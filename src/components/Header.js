import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DialogBox from './DialogBox';
import './Header.css';
import mainLogo from '../resources/phosy.png';
import { changeLang } from '../slices/configurationSlice';

import Module from '../lib/renderer.js';
let exportation = null;

function offerFileAsDownload(filename, mime) {
	mime = mime || "application/octet-stream";

	let content = Module.FS.readFile(filename);
	console.log(`Offering download of "${filename}", with ${content.length} bytes...`);

	var a = document.createElement('a');
	a.download = filename;
	a.href = URL.createObjectURL(new Blob([content], {type: mime}));
	a.style.display = 'none';

	document.body.appendChild(a);
	a.click();
	setTimeout(() => {
		document.body.removeChild(a);
		URL.revokeObjectURL(a.href);
	}, 2000);
}

function Header() {
	const configuration = useSelector((state) => state.configuration);
	const dispatch = useDispatch();

	const [actionState, setActionState] = useState({action: false, currLang: configuration.langSettings.lang});

	useEffect( () => {
		Module().then((e) => {
			exportation = e;
			exportation.FS.mkdir('root');
		});
	}, []);

	function handleLangChange(e) {
		setActionState({action: true, currLang: e.target.value});
	}

	function handleExport(e) {
		let point = new exportation.Vector3D(3,3,3);
		let mat = new exportation.makeMetal(point, 3);
		let sphere = new exportation.makeSphereMetal(point, 3, mat);
		let cam = new exportation.Camera(point, point, point, 3, 90);
		let renderer = new exportation.Renderer(cam, 1, 3);
		console.log(sphere);
		renderer.addSphere(sphere);
		renderer.addSphere(sphere);
		renderer.addSphere(sphere);
		renderer.addSphere(sphere);
		renderer.render();
		offerFileAsDownload('image.png', 'mime/type')
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
			<div className='leftSideHeader'>
				<img src={mainLogo} className='mainLogo' alt="phosy"/>
				<i className='fa-solid fa-file-export translations' title='Export to png' onClick={handleExport}/>
			</div>
			<div className='rightSideHeader'>
				<i className='fa-solid fa-user fa-language translations' title='Change current language' onClick={handleClick}/>
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
