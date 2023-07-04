import './Header.css';
import mainLogo from '../resources/phosy.png';

function Header() {
	return (
		<div className='Header'>
			<img  src={mainLogo} className='mainLogo' alt="phosy"/>
			<div className='credits'>
				Ian Cisneros
			</div>
		</div>
	);
}

export default Header;
