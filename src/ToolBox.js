import { useSelector } from 'react-redux'

import './ToolBox.css';
import ToolNav from './ToolNav';
import ObjectsBox from './ObjectsBox';
import MaterialsBox from './MaterialsBox';


function ToolBox() {

	const selectedTab = useSelector((state) => state.tabSelectReducer.value)


	return (
		<div className='ToolBox'>
			<ToolNav/>
			{ selectedTab === 'materials' ? 
				<MaterialsBox/> :
				<ObjectsBox/>
				
			}
		</div>
	);
}

export default ToolBox;
