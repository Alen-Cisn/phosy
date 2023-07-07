import { useSelector } from 'react-redux';

import './Display.css';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

function Display() {
	const objects = useSelector((state) => state.objects.value);
	const materials = useSelector((state) => state.materials.value);

	return (
		<div className='Display'>
			<Canvas
				className='Canvas'
				camera={{ 
					position: [2, 0, 12.25], 
					fov: 90,
					aspect: 1.7777777777, // 16/9
					near: 0.001,
					far: 1000
				 }}
			>
			<ambientLight />
			{objects.map((e, i) => {
				let material = materials[e.material];
				return 	<mesh key={i}
							visible={true}
							position={e.center} >
								<meshLambertMaterial 
									args={[{color: material.color, reflectivity: 1, side: THREE.DoubleSide}]}/>
							<sphereGeometry args={[e.radius]}/>
							
						</mesh>
			})}
			
			</Canvas>
		</div>
	);
}

export default Display;
