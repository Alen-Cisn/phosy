import { useEffect } from 'react';

import './editionBox.css';

function EditionBox({ children, handleKeyDown }) {
	
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div className='backgroundEdition' >
			<div className='editionBox' >
				{children}
			</div>
		</div>
	);
}

export default EditionBox;