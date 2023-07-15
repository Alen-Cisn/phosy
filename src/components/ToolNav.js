import { useSelector, useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl';

import { selectMaterials, selectObjects, selectProperties } from '../slices/tabSelectSlice'
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
				<FormattedMessage 
					id="materialsLabel"
					defaultMessage="Loading..."/>
			</button>
			<button
				className={selectedTab === 'objects' ? 'selected' : 'nonSelected'}
				aria-label="Select materials"
				onClick={() => dispatch(selectObjects())}>
				<FormattedMessage 
					id="objectsLabel"
					defaultMessage="Loading..."/>
			</button>
			<button
				className={selectedTab === 'properties' ? 'selected' : 'nonSelected'}
				aria-label="Select properties"
				onClick={() => dispatch(selectProperties())}>
				<FormattedMessage 
					id="propertiesLabel"
					defaultMessage="Loading..."/>
			</button>
		</div>
	);
}

export default ToolNav;
