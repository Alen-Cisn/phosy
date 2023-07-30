import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import { addObject, deleteObject, editObject } from '../slices/objectsSlice';
import DialogBox from './DialogBox';
import NumericInput from './NumericInput';
import './ObjectsBox.css';

function ObjectsBox() {
	const dispatch = useDispatch();
	const objects = useSelector((state) => state.objects.value);

	const [currentAction, setCurrentAction] = useState('');
	const [currentObject, setCurrentObject] = useState({});
	const [currentObjectName, setCurrentObjectName] = useState('');

	const materials = useSelector((state) => state.materials.value);
	
	function handleCoordXChange(e) {
		let object = structuredClone(currentObject);
		object.center[0] = e.target.value;
		setCurrentObject(object);
	}

	function handleCoordYChange(e) {
		let object = structuredClone(currentObject);
		object.center[1] = e.target.value;
		setCurrentObject(object);
	}

	function handleCoordZChange(e) {
		let object = structuredClone(currentObject);
		object.center[2] = e.target.value;
		setCurrentObject(object);
	}

	function handleKeyDown (e) {
		if (e?.key === 'Escape' || e === true) {
			setCurrentObject({});
			setCurrentAction('');
		}
	}

	function handleClick(action, e) {
		setCurrentAction(action);
		setCurrentObject(action === 'add' ? 
			{name: 'Object ' + (objects.at(-1).id + 1),
			type: 'sphere',
			radius: 5.0,
			center: [0.0, 0.0, 0.0],
			color: "#0010AA",
			material: 0} : (e ? structuredClone(e) : {})
		);
		setCurrentObjectName(e?.name);
	}

	function handleObjectSet() {
		switch (currentAction) {
		case 'add':
			dispatch(addObject(currentObject));
			break;
		case 'edit':
			dispatch(editObject(currentObject));
			break;
		case 'delete':
			// if (!objects.find(object => object.material === currentObject.id)) {
				dispatch(deleteObject(currentObject.id));
			// }
			break;
		}
		setCurrentObject({});
		setCurrentAction('');
	}

	function handleNameChange(e) {
		let object = currentObject;
		object.name = e.target.value;
		setCurrentObject(object);
	}

	function handleNameBlur(e) {
		let object = currentObject;
		if (e.target.value) {
			object.name = e.target.value;
		} else {
			object.name = currentObject.originalName;
			e.target.value = currentObject.originalName
		}
		setCurrentObject(object);
	}

	function handleTypeChange(e) {
		let object = currentObject;
		object.type = e.target.value;
		setCurrentObject(object);
	}

	function propertiesByObjectType() {
	
		switch (currentObject?.type) {
		case 'sphere':
			return (
				<>
					<label >
						<FormattedMessage 
							id="objectsCenter"
							defaultMessage="Loading..."/>:
					</label>
					<div className='coordinatesInputs'>
						<label htmlFor='coordX'>
							X:
						</label>
						<NumericInput 
							type='text' 
							className='numericInput'
							id='coordX'
							onChange={handleCoordXChange}
							value={currentObject.center[0]}/>
						<label htmlFor='coordX'>
							Y:
						</label>
						<NumericInput 
							type='text' 
							className='numericInput'
							id='coordY'
							pattern='^[0-9]*[\.]?[0-9]*?$'
							onChange={handleCoordYChange}
							value={currentObject.center[1]}/>
						<label htmlFor='coordX'>
							Z:
						</label>
						<NumericInput 
							type='text' 
							className='numericInput'
							id='coordZ'
							onChange={handleCoordZChange}
							value={currentObject.center[2]}/> 
					</div>
				</>);
		case 'triangle':
		case 'toroid':
		default:
			return undefined;
		}
	}

	function contentByAction(){
		switch (currentAction) {
		case 'add':
		case 'edit':
			return ( 
			<>
				<h2 className='actionDescription'>
					 <FormattedMessage 
						id={currentAction === 'add' ? 'objectsAdd': 'edit'}
						values={{name: currentObjectName}}
						defaultMessage="Loading..."/>
				</h2>
				<div className='editonForm'>
					<label htmlFor='objectName'>
						<FormattedMessage 
							id="name"
							defaultMessage="Loading..."/>:
					</label>
					<input 
						id='objectName' 
						type='text' 
						maxLength={30} 
						onChange={handleNameChange}
						onBlur={handleNameBlur}
						defaultValue={currentObject?.name}/>
					{/*<label>
						<FormattedMessage 
							id="objectsSelectObjectType"
							defaultMessage="Loading..."/>:
					</label>
					 <select onChange={handleTypeChange} defaultValue={currentObject?.type}>
						<option value='sphere'>
							<FormattedMessage 
								id="objectsSphere"
								defaultMessage="Loading..."/>
						</option>
						{/* <option value='triangle'>
							<FormattedMessage 
								id="materialsTriangle"
								defaultMessage="Loading..."/>
						</option>
						<option value='toroid'>
							<FormattedMessage 
								id="materialsToroid"
								defaultMessage="Loading..."/>
						</option> * /}
					</select> */}

					{propertiesByObjectType()}
				</div>
			</>);
		case 'delete':
			return (
				<h2>
					<FormattedMessage 
						id="objectsDelete"
						defaultMessage="Loading..."/>
				</h2>
			);
		default:
			return undefined;
		}			

	}

	const editionContent = contentByAction();

	return (
		<div className='ObjectsBox'>
			<div className='Objects'>
				{
					objects.map((e) => 
						<div className='Object' key={e.id}>
							<span>
								{e.name}
							</span>
							<div className='actions'>
								<i className='fa-solid fa-user fa-pen' title={"Edit " + e.name} onClick={() => handleClick('edit', e)}/>
								<i className='fa-solid fa-user fa-trash' title={"Delete " + e.name} onClick={() => handleClick('delete', e)}/>
							</div>
						</div>
					)
				}
			</div>
			<button className='addObject'
			 	onClick={() => handleClick('add')}>
				<FormattedMessage 
				id="objectsAdd"
				defaultMessage="Loading..."/>
			</button>
			<DialogBox
				show={currentAction ? true : false} 
				showDoneButton={true} 
				handleKeyDown={handleKeyDown.bind(this)} 
				handleDone={handleObjectSet.bind(this)}>
				{editionContent}
			</DialogBox>
		</div>
	);
}

export default ObjectsBox;
