import { useState, useEffect } from 'react';

const usePersonControls = () => {
	const keys = {
		ArrowUp: 'up',
		ArrowDown: 'down',
		ArrowLeft: 'left',
		ArrowRight: 'right'
	};

	const moveFieldByKey = (key) => keys[key];

	const [movement, setMovement] = useState({
		up: false,
		down: false,
		left: false,
		right: false
	});

	useEffect(() => {
		const handleKeyDown = (e) => {
			setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
			document.getElementById("direction_" + moveFieldByKey(e.code))?.classList.add("directionSelected");
		};
		const handleKeyUp = (e) => {
			setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
			document.getElementById("direction_" + moveFieldByKey(e.code))?.classList.remove("directionSelected");
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