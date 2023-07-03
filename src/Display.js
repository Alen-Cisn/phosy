import './Display.css';
import { Canvas } from '@react-three/fiber';
function Display() {
	return (
		<div className='Display'>
			<Canvas
				className='Canvas'
				camera={{ position: [2, 0, 12.25], fov: 90 }}
			>
				<mesh
					material={3}>
					<sphereGeometry args={[1]} />
					<meshNormalMaterial />
				</mesh>
			</Canvas>
		</div>
	);
}

export default Display;
