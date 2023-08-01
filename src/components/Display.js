import { useSelector } from 'react-redux';

import './Display.css';
import { Canvas, useFrame, Vector3 } from '@react-three/fiber';
import * as THREE from 'three';
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';
import usePersonControls from '../hooks/usePersonControls';
import { degToRad } from 'three/src/math/MathUtils';

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
	const { up, down, left, right } = usePersonControls();
	
	useFrame((state) => {
		// Calculating front/side movement ...
		let frontVector = new THREE.Vector3(0, 0, 0);
		let sideVector = new THREE.Vector3(0, 0, 0);
		let direction = new THREE.Vector3(0, 0, 0);

		sideVector.set(0, Number(left) - Number(right), 0);
		frontVector.set(Number(up) - Number(down), 0, 0);

		sideVector.set(0, Number(right) - Number(left),0 );
		frontVector.set(Number(up) - Number(down), 0, 0);
		direction
			.subVectors(frontVector, sideVector)
			.normalize()
			.multiplyScalar(1);
		let currDir = new THREE.Vector3(0, 0, 0);
		state.camera.getWorldDirection(currDir);
		state.camera.rotateOnAxis(direction, degToRad(1));


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
			<div className='directions'>
				<div className='direction' id='direction_up'>
				</div>
				<div className='direction' id='direction_down'>
				</div>
				<div className='direction' id='direction_left'>
				</div>
				<div className='direction' id='direction_right'>
				</div>
			</div>
		</div>
	);
}

export default Display;
