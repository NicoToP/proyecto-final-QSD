import { PetForm } from '../components/PetForm'

export function PetPage() {
  return (
    <div className='main'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <PetForm />
          </div>
        </div>
      </div>
    </div>
  )
}
