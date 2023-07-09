import './Header.css';
import mainLogo from '../resources/phosy.png';

function Header({ handleLangChange, lang }) {
	return (
		<div className='Header'>
			<div className='leftSideHeader'>
				<img src={mainLogo} className='mainLogo' alt="phosy"/>
				<select onChange={handleLangChange} defaultValue={lang}>
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
			</div>
			<div className='credits'>
				Ian Cisneros
			</div>
		</div>
	);
}

export default Header;
