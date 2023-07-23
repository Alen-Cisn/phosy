import { useEffect, useRef } from 'react';
import 'https://kit.fontawesome.com/7fbf3ff9d4.js';
import { FormattedMessage } from 'react-intl';
import { CSSTransition } from 'react-transition-group';

import './DialogBox.css';

function DialogBox({ children, show, showDoneButton = true, handleKeyDown, handleDone, className }) {
	const nodeRef = useRef(null);
	
	useEffect(() => {
		document.addEventListener('keydown', handleKeyDown);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		
		<CSSTransition
			nodeRef={nodeRef}
			in={show}
			timeout={200}
			unmountOnExit
			classNames={"DialogBox"}>
				
			<div className='backgroundEdition' onClick={() => handleKeyDown(true)}>
				<div className={'DialogBox ' + className} ref={nodeRef} onClick={(e) => e.stopPropagation()}>
					<button id='closeButton' className='button' onClick={() => handleKeyDown(true)}>
						<i className='fa-solid fa-user fa-xmark' ></i>
					</button>
					{children}
					<button id='doneButton' className='button' onClick={handleDone} hidden={!showDoneButton}>
							<FormattedMessage 
							id="editionBoxDone"
							defaultMessage="Done"/>
					</button>
				</div>
			</div>
		</CSSTransition>
	);
}

export default DialogBox;