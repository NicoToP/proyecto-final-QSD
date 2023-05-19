import { MdPets } from 'react-icons/md';
import { usePets } from '../context/petContext';
import { PetCard } from '../components/PetCard';

export function ListPet() {
	const { pets } = usePets();

	const renderPet = () => {
		if (pets.length === 0)
			return (
				<div className='col d-flex flex-column justify-content-center align-items-center'>
					<div className='card'>
						<MdPets className='card-img-top icon-size' />
						<div className='card-body'>
							<p className='card-title'>Aun no hay mascotas registradas</p>
						</div>
					</div>
				</div>
			);

		return (
			<div className='col'>
				{pets.map(pet => (
					<PetCard pet={pet} key={pet._id} />
				))}
			</div>
		);
	};

	return (
		<div className='col'>
			<div className='row mt-2'>{renderPet()}</div>
		</div>
	);
}
