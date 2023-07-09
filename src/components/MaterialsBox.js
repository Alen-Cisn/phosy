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
	
	const [actionState, setActionState] = useState({action: '', object: null});

	function handleKeyDown (event) {
		if (event.key === 'Escape') {
			setActionState({action: '', object: null});
		}
	}

	function handleClick(action, e) {
		switch (action) {
		case 'edit':
			// action
			setActionState({action, object: e});
			break;
		case 'delete':
			// action
			setActionState({action, object: e});
			break;
		default: //delete
			setActionState({action, object: null});
		}
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
				{actionState.action && 
					<EditionBox handleKeyDown={handleKeyDown.bind(this)}>
						<input/>
					</EditionBox>
				}
			</div>
		</>
	);
}

export default MaterialsBox;
