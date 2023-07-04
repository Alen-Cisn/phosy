import { useSelector, useDispatch } from 'react-redux';

import 'https://kit.fontawesome.com/7fbf3ff9d4.js';

import { addObject, deleteObject, editObject } from '../slices/objectsSlice';
import './ObjectsBox.css';

function ObjectsBox() {
	const dispatch = useDispatch();
	const objects = useSelector((state) => state.objects.value);
	
	return (
		<div className='ObjectsBox'>
			<div className='Objects'>
				{
					objects.map((e) => 
						<div className='Material'>
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
			<button className='addObject'
				onClick={() => dispatch(addObject())}>
				Add object
			</button>
		</div>
	);
}

export default ObjectsBox;
