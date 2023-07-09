import { useSelector, useDispatch } from 'react-redux';
// import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import { changeRatioY, changeRatioX, changeFov } from '../slices/propertiesSlice'
import './PropertiesBox.css';

function PropertiesBox() {
	const dispatch = useDispatch();
	const properties = useSelector((state) => state.properties);
	const maxXAspectRatio = 14;
	const maxYAspectRatio = 24;

	const handleAspectRaitoYChange = (e) => {
		dispatch(changeRatioY(e.target.value > maxYAspectRatio ? maxYAspectRatio : (e.target.value < 1 ? 1 : e.target.value)));
	}

	const handleAspectRaitoXChange = (e) => {
		dispatch(changeRatioX(e.target.value > maxXAspectRatio ? maxXAspectRatio : (e.target.value < 1 ? 1 : e.target.value)));
	}

	const handleFovChange = (e) => {
		dispatch(changeFov(e.target.value));
	}
	return (
		<div className='PropertiesBox'>
			
			<div className='imageProperties'>
			</div>
			<div className='cameraProperties'>
			</div>
			<div className='propertiesCategory'>
				<h3 className='propertiesCategoryTitle'>
					Aspect ratio
				</h3> 
				<div>
					<label htmlFor="horizontalAspectRatio">
						Y:
					</label> 
					<input type="range" id="horizontalAspectRatioRange" className='rangeInput'
						min={1} max={24} value={properties.aspectRatio.y} onChange={handleAspectRaitoYChange} />
					<input type="number" id="horizontalAspectRatio" className='numericInput' 
						min={1} max={24} value={properties.aspectRatio.y} pattern="\d*" onChange={handleAspectRaitoYChange}/>
				</div>
				<div>
					<label htmlFor="none">
						X:
					</label> 
					<input type="range" id="verticalAspectRatioRange" className='rangeInput' 
						min={1} max={14} value={properties.aspectRatio.x} onChange={handleAspectRaitoXChange}/>
					<input type="number" id="verticalAspectRatio" className='numericInput'
						min={1} max={14} value={properties.aspectRatio.x} pattern="\d*" onChange={handleAspectRaitoXChange}/>
				</div>
			</div>
			<div>
				<label>
					Resolution
				</label>
				<input type="numeric" id="resolution"/>
				<input type="numeric" id="resolution"/>
			</div>
			<div>
				<label htmlFor="aspectRatio">
					Aspect ratio
				</label> 
				<input type="numeric" id="aspectRatio"/>
			</div>
		</div>
	);
}

export default PropertiesBox;
