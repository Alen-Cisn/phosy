import './ObjectsBox.css';

function ObjectsBox() {
	const objects = [
		{
			name: 'Esfera 1',
			type: 'sphere',
			center: [1.0, 1.0, 1.0],
			radius: 2
		},
		{
			name: 'Esfera 2',
			type: 'sphere',
			center: [1.0, 1.0, 1.0],
			radius: 1.5
		}
	]
	
	return (
		<div className='ObjectsBox'>
			<div className='Objects'>
				{objects.map((e) => 
					<div className='Object'>
						<span>
							{e.name}
						</span>
					</div>
				)}
			</div>
			<div className='addObject'>
				Add object
			</div>
		</div>
	);
}

export default ObjectsBox;
