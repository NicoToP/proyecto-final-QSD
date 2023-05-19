import { usePets } from "../context/petContext";
import { PetCard } from "../components/PetCard";
import { MdPets } from "react-icons/md";
import { PetForm } from "../components/PetForm";

export function PetPage() {
  const { pets } = usePets();

  const renderPet = () => {
    if (pets.length === 0)
      return (
        <div className="col d-flex flex-column justify-content-center align-items-center">
          <div className="card">
            <MdPets className="card-img-top icon-size" />
            <div className="card-body">
              <p className="card-title">Aun no hay mascotas registradas</p>
            </div>
          </div>
        </div>
      );

    return (
      <div className="col">
        {pets.map((pet) => (
          <PetCard pet={pet} key={pet._id} />
        ))}
      </div>
    );
  };

  return (
    <div className="main">
      <div className="container-fluid">
        <div className="d-flex align-items-center my-3">
          <h1 className="fs-3">Mascotas ({pets.length})</h1>
        </div>
        <div className="row">
          <div className="col-4">
            <PetForm />
          </div>
          <div className="col-8">
            <div className="row mt-2">{renderPet()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
