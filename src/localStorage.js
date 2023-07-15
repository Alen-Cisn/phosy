

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
}

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify({
			materials: state.materials,
			objects: state.objects,
			properties: state.properties,
			configuration: state.configuration,
		  });
		localStorage.setItem('state', serializedState);
	} catch (err) {
		//do nothing
	}
}