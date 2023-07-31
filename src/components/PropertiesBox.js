import { useSelector, useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
// import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import { changeRatioY, 
	changeRatioX,
	changeFov,
	changeCameraCoordinateX,
	changeCameraCoordinateY,
	changeCameraCoordinateZ,
	changeResolution } from '../slices/propertiesSlice';
import NumericInput from './NumericInput';
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
	
	function handleCoordXChange(e) {
		dispatch(changeCameraCoordinateX(e.target.value));
	}

	function handleCoordYChange(e) {
		dispatch(changeCameraCoordinateY(e.target.value));
	}

	function handleCoordZChange(e) {
		dispatch(changeCameraCoordinateZ(e.target.value));
	}

	function handleResolutionChange(e) {
		dispatch(changeResolution(e.target.value));
	}

	return (
		<div className='PropertiesBox'>
			
			<div className='imageProperties'>
			</div>
			<div className='cameraProperties'>
			</div>
			<div className='propertiesCategory aspectRatio'>
				<h3 className='propertiesCategoryTitle'>
					<FormattedMessage 
						id="propertiesAspectRatio"
						defaultMessage="Loading..."/>
				</h3> 
				<div>
					<label htmlFor="horizontalAspectRatio">
						Y:
					</label> 
					<input type="range" id="horizontalAspectRatioRange" className='rangeInput'
						min={1} max={maxYAspectRatio} value={properties.aspectRatio.y} onChange={handleAspectRaitoYChange} />
					<NumericInput 
						type='text'
						className='numericInput'
						id='horizontalAspectRatio'
						pattern='^[0-9]*[\.]?[0-9]*?$'
						onChange={handleAspectRaitoYChange}
						min={1} max={maxYAspectRatio}
						value={properties.aspectRatio.y}/>
				</div>
				<div>
					<label htmlFor="none">
						X:
					</label> 
					<input type="range" id="verticalAspectRatioRange" className='rangeInput' 
						min={1} max={maxXAspectRatio} value={properties.aspectRatio.x} onChange={handleAspectRaitoXChange}/>
					<NumericInput 
						type='text'
						className='numericInput'
						id='verticalAspectRatio'
						pattern='^[0-9]*[\.]?[0-9]*?$'
						onChange={handleAspectRaitoXChange}
						min={1} max={maxXAspectRatio}
						value={properties.aspectRatio.x}/>
				</div>
			</div>
			<div className='propertiesCategory'>
				<h3 className='propertiesCategoryTitle'>
					<FormattedMessage 
						id="propertiesResolution"
						defaultMessage="Loading..."/>
				</h3>
				<div>
					<label htmlFor="horizontalResolution">
						Y:
					</label> 
					<NumericInput 
						type='text'
						className='numericInput'
						id='horizontalResolution'
						pattern='^[0-9]*[\.]?[0-9]*?$'
						onChange={handleResolutionChange}
						min={10} max={4000}
						value={properties.horizontalResolution}/>
					<label htmlFor="verticalResolution">
						X:
					</label> 
					<NumericInput 
						type='text'
						className='numericInput'
						id='verticalResolution'
						pattern='^[0-9]*[\.]?[0-9]*?$'
						disabled={true}
						value={parseInt(properties.horizontalResolution * (properties.aspectRatio.y / properties.aspectRatio.x))}/>
				</div>
			</div>
			<div className='propertiesCategory'>
				<h3 className='propertiesCategoryTitle'>
					<FormattedMessage 
						id="propertiesCameraCoordinates	"
						defaultMessage="Loading..."/>
				</h3>
				
				<div className='coordinatesInputs'>
					<label htmlFor='cameraCoordX'>
						X:
					</label>
					<NumericInput 
						type='text'
						className='numericInput'
						id='cameraCoordX'
						onChange={handleCoordXChange}
						value={properties.cameraCoordinates[0]}/>
					<label htmlFor='cameraCoordY'>
						Y:
					</label>
					<NumericInput 
						type='text'
						className='numericInput'
						id='cameraCoordY'
						pattern='^[0-9]*[\.]?[0-9]*?$'
						onChange={handleCoordYChange}
						value={properties.cameraCoordinates[1]}/>
					<label htmlFor='cameraCoordZ'>
						Z:
					</label>
					<NumericInput 
						type='text'
						className='numericInput'
						id='cameraCoordZ'
						onChange={handleCoordZChange}
						value={properties.cameraCoordinates[2]}/> 
				</div>
			</div>
		</div>
	);
}

export default PropertiesBox;
