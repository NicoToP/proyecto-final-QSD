import toast from 'react-hot-toast'
import { usePets } from '../context/petContext'
import { useNavigate } from 'react-router-dom'
import { BsHearts, BsFillTrashFill, BsFillPencilFill } from 'react-icons/bs'

export function PetCard({ pet }) {
  const { deletePet } = usePets()
  const navigate = useNavigate()

  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>¿Está seguro lo quiere eliminar?</p>
        <div className='d-flex align-items-center justify-content-center'>
          <button
            className='btn btn-danger px-3 py-2 mx-2'
            onClick={() => {
              deletePet(id)
              toast.dismiss(t.id)
            }}
          >
            Eliminar
          </button>
          <button
            className='btn btn-secondary px-3 py-2 mx-2'
            onClick={() => {
              toast.dismiss(t.id)
            }}
          >
            Cancelar
          </button>
        </div>
      </div>
    ))
  }

  return (
    <div className='row justify-content-center'>
      <div className='col-7'>
        <div
          className='shadow card mb-3'
          onClick={() => navigate(`/pets/${pet._id}`)}
        >
          <div className='card-header d-flex bg-primary bg-opacity-25'>
          {/* Botón para editar */}
            <button
              className='btn btn-outline-primary btn-sm'
              onClick={(e) => {
                e.stopPropagation()
                handleDelete(pet._id)
              }}
            >
              <BsFillPencilFill className='mx-1'></BsFillPencilFill>
            </button>
            <div className='container d-flex justify-content-center'>
              <BsHearts className='align-self-center mx-2'></BsHearts>
              <h2 className='m-0'>{pet.namePet}</h2>
            </div>

            <button
              className='btn btn-outline-danger btn-sm'
              onClick={(e) => {
                e.stopPropagation()
                handleDelete(pet._id)
              }}
            >
              <BsFillTrashFill className='mx-1'></BsFillTrashFill>
            </button>
          </div>
          <div className='card-body'>
            <h5 className='card-title text-center'>{pet.species}</h5>
            <p className='card-text text-center'>{pet.description}</p>
          </div>
          <div class="card-footer text-center border-primary"><strong>Peso {pet.weight}Kg</strong></div>
        </div>
      </div>
    </div>
  )
}
