import { useSelector, useDispatch } from 'react-redux'
import { selectMaterials, selectObjects } from '../slices/tabSelectSlice'
import './ToolNav.css';

function ToolNav() {
	const dispatch = useDispatch()

	const selectedTab = useSelector((state) => state.tabSelect.value)

	return (
		<div className='ToolNav'>
			<button
				className={selectedTab === 'materials' ? 'selected' : 'nonSelected'}
				aria-label="Select materials"
				onClick={() => dispatch(selectMaterials())}>
				Materials
			</button>
			<button
				className={selectedTab === 'objects' ? 'selected' : 'nonSelected'}
				aria-label="Select materials"
				onClick={() => dispatch(selectObjects())}>
				Objects
			</button>
		</div>
	);
}

export default ToolNav;
