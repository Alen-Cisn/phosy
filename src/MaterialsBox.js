import './MaterialsBox.css';

function MaterialsBox() {
	const materials = [
		{
			name: 'Dieléctrico 1',
			type: 'dielectric',
			indexOfReflection: 1.0
		},
		{
			name: 'Mate 1',
			type: 'lambertian',
			color: [1.0, 1.0, 1.0]
		}
	]
	return (
		<div className='MaterialsBox'>
			<div className='Materials'>
				{materials.map((e) => 
					<div className='Material'>
						<span>
							{e.name}
						</span>
						
					</div>
				)}
			</div>
			<div className='addMaterial'>
				Add material
			</div>
		</div>
	);
}

export default MaterialsBox;
