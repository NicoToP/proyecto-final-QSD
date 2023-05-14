import toast from 'react-hot-toast';
import {usePets} from '../context/petContext';

export function PetCard({pet}) {
  const {deletePet} = usePets();

  const handleDelete = id => {
    toast(t => (
      <div>
        <p>Estas seguro lo quiers eliminar?</p>
        <div className="d-flex align-items-center justify-content-center">
          <button
            className="btn btn-danger px-3 py-2 mx-2"
            onClick={() => {
              deletePet(id);
              toast.dismiss(t.id);
            }}
          >
            Eliminar
          </button>
          <button
            className="btn btn-secondary px-3 py-2 mx-2"
            onClick={() => {
              toast.dismiss(t.id);
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{pet.namePet}</h5>
        <p className="card-text">{pet.description}</p>
        <a className="btn btn-danger" onClick={() => handleDelete(pet._id)}>
          Eliminar
        </a>
      </div>
    </div>
  );
}
