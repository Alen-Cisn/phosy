
import * as THREE from 'three';

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		const stateSaved = JSON.parse(serializedState);
		var loader = new THREE.ObjectLoader();
		const result = loader.parse(stateSaved.properties.camera);
		stateSaved.properties.camera = result;
		return stateSaved;
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