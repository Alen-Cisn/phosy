import { useSelector, useDispatch } from 'react-redux';

import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import { addMaterial, deleteMaterial, editMaterial } from '../slices/materialsSlice';
import './MaterialsBox.css';

function MaterialsBox() {
	const dispatch = useDispatch();
	const materials = useSelector((state) => state.materials.value);
	
	return (
		<div className='MaterialsBox'>
			<div className='Materials'>
				{
					materials.map((e) => 
						<div className='Material' key={e.id}>
							<span>
								{e.name}
							</span>
							<div className='actions'>
								<i className='fa-solid fa-user fa-pen' title={"Edit " + e.name}/>
								<i className='fa-solid fa-user fa-trash' title={"Delete " + e.name}/>
							</div>
						</div>
					)
				}
			</div>
			<button className='addMaterial'
				onClick={() => dispatch(addMaterial())}>
				Add material
			</button>
		</div>
	);
}

export default MaterialsBox;
