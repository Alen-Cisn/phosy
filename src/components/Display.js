import { useSelector } from 'react-redux';

import './Display.css';
import { Canvas } from '@react-three/fiber';

function Display() {
	const objects = useSelector((state) => state.objects.value);

	return (
		<div className='Display'>
			<Canvas
				className='Canvas'
				camera={{ position: [2, 0, 12.25], fov: 90 }}
			>
			{
				objects.map((e) => 
					
					<mesh
						material={3}>
						<sphereGeometry args={e.radius} />
						<meshNormalMaterial />
					</mesh>
				)
			}
			</Canvas>
		</div>
	);
}

export default Display;
