import {usePets} from '../context/petContext';
import {Link} from 'react-router-dom';
import {PetCard} from '../components/PetCard';
import {VscEmptyWindow} from 'react-icons/vsc';
import {MdPets} from 'react-icons/md';

export function HomePage() {
  const {pets} = usePets();

  const renderPet = () => {
    if (pets.length === 0)
      return (
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="card">
            <VscEmptyWindow className="card-img-top" />
            <div className="card-body">
              <p className="card-title">No hay mascotas</p>
              <Link to="/pets">Registra una mascota</Link>
            </div>
          </div>
        </div>
      );

    return (
      <div className="col">
        {pets.map(pet => (
          <PetCard pet={pet} key={pet._id} />
        ))}
      </div>
    );
  };

  return (
    <main>
      <div className="d-flex align-items-center my-3">
        <h1 className="fs-6">Mascotas ({pets.length})</h1>
        <Link to="/pets">
          <MdPets className="align-self-center mx-2" />
          Nueva mascota
        </Link>
      </div>
      <div className="row mt-2">{renderPet()}</div>
    </main>
  );
}
