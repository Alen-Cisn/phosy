import { useState, useEffect } from 'react';

const usePersonControls = () => {
	const keys = {
		ArrowUp: 'forward',
		ArrowDown: 'backward',
		ArrowLeft: 'left',
		ArrowRight: 'right'
	};

	const moveFieldByKey = (key) => keys[key];

	const [movement, setMovement] = useState({
		forward: false,
		backward: false,
		left: false,
		right: false
	});

	useEffect(() => {
		const handleKeyDown = (e) => {
			setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
		};
		const handleKeyUp = (e) => {
			setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
		};
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);
		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.removeEventListener('keyup', handleKeyUp);
		};
	}, []);
	return movement;
};

export default usePersonControls;