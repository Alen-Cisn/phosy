import { useDispatch } from 'react-redux'
import { selectMaterials, selectObjects } from './slices/tabSelectSlice'
import './ToolNav.css';

function ToolNav() {
	const dispatch = useDispatch()

	return (
		<div className='ToolNav'>
			<button
				aria-label="Select materials"
				onClick={() => dispatch(selectMaterials())}>
				Materials
			</button>
			<button
				aria-label="Select materials"
				onClick={() => dispatch(selectObjects())}>
				Objects
			</button>
		</div>
	);
}

export default ToolNav;
