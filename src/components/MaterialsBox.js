import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import { addMaterial, deleteMaterial, editMaterial } from '../slices/materialsSlice';
import EditionBox from './editionBox';
import './MaterialsBox.css';

function MaterialsBox() {
	const dispatch = useDispatch();
	const materials = useSelector((state) => state.materials.value);
	
	const [actionState, setActionState] = useState({action: '', show: false, object: null});

	function handleKeyDown (event) {
		if (event?.key === 'Escape' || event === true) {
			setActionState({action: '', show: false, object: null});
		}
	}

	function handleClick(action, e) {
		setActionState({action, show: true, object: e});
	}

	return (
		<>
			<div className='MaterialsBox'>
				<div className='Materials'>
					{
						materials.map((e) => 
							<div className='Material' key={e.id}>
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
				<button className='addMaterial'
					onClick={() => dispatch(addMaterial())}>
					<FormattedMessage 
						id="materialsAdd"
						defaultMessage="Loading..."/>
				</button>
				
					<EditionBox show={actionState.show} handleKeyDown={handleKeyDown.bind(this)} handleDone={handleKeyDown.bind(this)}>
						<select >
							<option value='lambertian'>
								
							</option>
							<option value='metal'>
							</option>
							<option value='lambertian'>
								
							</option>
						</select>
						<label htmlFor='indexOfReflection'>
							Index of reflection:
						</label>
						<input id='indexOfReflection' type='numeric' className='numericInput'/>
					</EditionBox>
			</div>
		</>
	);
}

export default MaterialsBox;
