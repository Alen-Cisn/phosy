import { useSelector } from 'react-redux'

import './ToolBox.css';
import ToolNav from './ToolNav';
import ObjectsBox from './ObjectsBox';
import MaterialsBox from './MaterialsBox';
import PropertiesBox from './PropertiesBox';

function renderSelected(selectedTab) {
	switch (selectedTab) {
		case "materials":
			return <MaterialsBox/>
		case "objects":
			return <ObjectsBox/>
		case "properties":
			return <PropertiesBox/>
		default:
			return;
	}
}

function ToolBox() {

	const selectedTab = useSelector((state) => state.tabSelect.value)


	return (
		<div className='ToolBox'>
			<ToolNav/>
			{ renderSelected(selectedTab) }
		</div>
	);
}

export default ToolBox;
