import { useSelector } from 'react-redux';

import './Display.css';
import { Canvas, useFrame, Vector3 } from '@react-three/fiber';
import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import usePersonControls from '../hooks/usePersonControls';

function meshMaterial(material) {
	switch (material.type) {
		case 'lambertian':
			return <meshLambertMaterial
				args={[{ color: material.color, reflectivity: 1, side: THREE.DoubleSide }]} />;
		case 'metal':
			return <meshStandardMaterial
			/>

	}
}
const PointCam = () => {
	const { forward, backward, left, right } = usePersonControls();
	
	useFrame((state) => {
		// Calculating front/side movement ...
		let frontVector = new THREE.Vector3(0, 0, 0);
		let sideVector = new THREE.Vector3(0, 0, 0);
		let direction = new THREE.Vector3(0, 0, 0);

		frontVector.set(0, 0, Number(forward) - Number(backward))
		sideVector.set(Number(right) - Number(left), 0, 0)

		frontVector.set(0, 0, Number(forward) - Number(backward))
		sideVector.set(Number(right) - Number(left), 0, 0)
		direction
			.subVectors(frontVector, sideVector)
			.normalize()
			.multiplyScalar(0.3);
		state.camera.lookAt(direction);


	});
	return null
}

function Display() {
	const objects = useSelector((state) => state.objects.value);
	const materials = useSelector((state) => state.materials.value);
	const properties = useSelector((state) => state.properties);

	const camera = new THREE.PerspectiveCamera(90, 1.7777777777, 0.001, 1000);
	camera.position.set(...properties.cameraCoordinates);
	return (
		<div className='Display'>
			<Canvas
				className='Canvas'
				camera={camera}
			>
				<ambientLight />
				{objects.map((e, i) => {
					let material = materials[e.material];
					return <mesh key={i}
						visible={true}
						position={e.center} >
						<meshLambertMaterial
							args={[{ color: material.color, reflectivity: 1, side: THREE.DoubleSide }]} />
						<sphereGeometry args={[e.radius]} />

					</mesh>
				})}
				<PointCam/>
			</Canvas>
		</div>
	);
}

export default Display;
