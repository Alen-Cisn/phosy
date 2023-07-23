import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import { addMaterial, deleteMaterial, editMaterial } from '../slices/materialsSlice';
import DialogBox from './DialogBox';
import ColorInput from './ColorInput';
import './MaterialsBox.css';

function MaterialsBox() {
	const dispatch = useDispatch();
	const materials = useSelector((state) => state.materials.value);
	const objects = useSelector((state) => state.objects.value);
	
	const [actionState, setActionState] = useState({action: '', object: {}});
	let isDoneEnabled = false;

	function handleKeyDown (e) {
		if (e?.key === 'Escape' || e === true) {
			let object = actionState.object;
			object.currentName = e.target?.value;
			setActionState({action: '', object: actionState.object})
		}
	}

	function handleClick(action, e) {
		setActionState({action, object: action === 'add' ? 
			{name: 'Material ' + (materials.at(-1).id + 1),
			type: 'lambertian',
			indexOfReflection: 0.5,
			fuzz: 0.0,
			color: "#0010AA"} : (e ? structuredClone(e) : {}),
			originalName: e?.name
		});
	}

	function handleNameChange(e) {
		let object = actionState.object;
		object.name = e.target.value;
		let originalName = actionState.originalName;
		setActionState({action: actionState.action, object, originalName})
	}

	function handleNameBlur(e) {
		let object = actionState.object;
		if (e.target.value) {
			object.name = e.target.value;
		} else {
			object.name = actionState.originalName;
			e.target.value = actionState.originalName
		}
		let originalName = actionState.originalName;
		setActionState({action: actionState.action, object, originalName})
	}


	function handleTypeChange(e) {
		let object = actionState.object;
		object.type = e.target.value;
		let originalName = actionState.originalName;
		setActionState({action: actionState.action, object, originalName})
	}
	
	function handleColorChange(e) {
		let object = actionState.object;
		object.color = e.target.value;
		let originalName = actionState.originalName;
		setActionState({action: actionState.action, object, originalName})
	}

	function handleFuzzChange(e) {
		let object = actionState.object;
		if (e.target.validity.valid && e.target.value) {
			object.fuzz = e.target.value + "";
		} else {
			object.fuzz = 0.0;
			e.target.value = 0.0;
		}
		let originalName = actionState.originalName;
		setActionState({action: actionState.action, object, originalName})
	}

	function handleFuzzBlur(e) {
		let object = actionState.object;
		if (e.target.validity.valid && e.target.value) {
			object.fuzz = parseFloat(e.target.value);
		} else {
			object.fuzz = 0.0;
			e.target.value = 0.0;
		}
		let originalName = actionState.originalName;
		setActionState({action: actionState.action, object, originalName})
	}
	function handleMaterialSet() {
		switch (actionState.action) {
		case 'add':
			dispatch(addMaterial(actionState.object));
			break;
		case 'edit':
			dispatch(editMaterial(actionState.object));
			break;
		case 'delete':
			if (!objects.find(object => object.material === actionState.object.id)) {
				dispatch(deleteMaterial(actionState.object.id));
			}
			break;
		}
		setActionState({action: '', object: {}})
	}

	function propertiesByMaterialType(materialType) {
	
		switch (materialType) {
		case 'lambertian':
			return (
				<>
					<label htmlFor='indexOfReflection'>
						<FormattedMessage 
							id="color"
							defaultMessage="Loading..."/>:
					</label>
					<ColorInput id='materialColor' onChange={handleColorChange} defaultValue={actionState.object?.color}/>
				</>
				);
		case 'metal':
			return (
				<>
					<label htmlFor='indexOfReflection'>
						<FormattedMessage 
							id="color"
							defaultMessage="Loading..."/>:
					</label>
					<ColorInput id='materialColor' onChange={handleColorChange} defaultValue={actionState.object?.color}/>
					<label htmlFor='fuzz'>
						<FormattedMessage 
							id="fuzz"
							defaultMessage="Loading..."/>:
					</label>
					<input 
						type='text' 
						className='numericInput'
						id='fuzz'
						pattern='^[0-9]*[\.]?[0-9]*?$'
						onChange={handleFuzzChange}
						onBlur={handleFuzzBlur}
						value={actionState.object?.fuzz}/>
				</>
				);
		case 'dielectric':
			return (
				<>
					<label htmlFor='indexOfReflection'>
						<FormattedMessage 
							id="color"
							defaultMessage="Loading..."/>:
					</label>
					<input id='materialColor' type='color' className='numericInput'/>
				</>
				);
		default:
			return undefined;
		}
	}

	function contentByAction(){
		switch (actionState.action) {
		case 'add':
		case 'edit':
			isDoneEnabled = true;
			return ( 
			<>
				<h2 className='actionDescription'>
					 <FormattedMessage 
						id={actionState.action === 'add' ? 'materialsAdd': 'edit'}
						values={{name: actionState.originalName}}
						defaultMessage="Loading..."/>
				</h2>
				<div className='materialEditonForm'>
					<label htmlFor='materialName'>
						<FormattedMessage 
							id="name"
							defaultMessage="Loading..."/>:
					</label>
					<input 
						id='materialName' 
						type='text' 
						maxLength={30} 
						onChange={handleNameChange}
						onBlur={handleNameBlur}
						defaultValue={actionState?.object?.name}/>
					<label>
						<FormattedMessage 
							id="materialsSelectMaterialType"
							defaultMessage="Loading..."/>:
					</label>
					<select onChange={handleTypeChange} defaultValue={actionState?.object?.type}>
						<option value='lambertian'>
							<FormattedMessage 
								id="materialsLambertian"
								defaultMessage="Loading..."/>
						</option>
						<option value='metal'>
							<FormattedMessage 
								id="materialsMetal"
								defaultMessage="Loading..."/>
						</option>
						<option value='lambertian'>
							<FormattedMessage 
								id="materialsDielectric"
								defaultMessage="Loading..."/>
								
						</option>
					</select>

					{propertiesByMaterialType(actionState?.object?.type)}
				</div>
			</>);
		case 'delete':
			if (!objects.find(object => object.material === actionState.object.id)) {
				isDoneEnabled = true;
				return (
					<p>
						<FormattedMessage 
							id="materialsDelete"
							defaultMessage="Loading..."/>
					</p>
				);
			} else {
				isDoneEnabled = false;
				return (
					<>
						<h4>
							<FormattedMessage 
								id="materialsDeleteNotPossible"
								defaultMessage="Loading..."/>
						</h4>
						<p>
							<FormattedMessage 
								id="materialsDeleteObjectsUsing"
								defaultMessage="Loading..."/>
						</p>
					</>
				);

			}
		default:
			return undefined;
		}			

	}
	const editionContent = contentByAction();
	return (
		<>
			<div className='MaterialsBox'>
				<div className='Materials'>
					{materials.map((e) => 
						<div className='Material' key={e.id}>
							<span>
								{e.name}
							</span>
							<div className='actions'>
								<i className='fa-solid fa-user fa-pen' title={"Edit " + e.name} onClick={() => handleClick('edit', e)}/>
								<i className='fa-solid fa-user fa-trash' title={"Delete " + e.name} onClick={() => handleClick('delete', e)}/>
							</div>
						</div>
					)}
				</div>
				<button className='addMaterial' onClick={() => handleClick('add')}>
					<FormattedMessage 
						id="materialsAdd"
						defaultMessage="Loading..."/>
				</button>
				<DialogBox 
					show={actionState.action ? true : false} 
					showDoneButton={isDoneEnabled} 
					handleKeyDown={handleKeyDown.bind(this)} 
					handleDone={handleMaterialSet.bind(this)}>
					{editionContent}
				</DialogBox>
			</div>
		</>
	);
}

export default MaterialsBox;
