export function Profile() {
  return (
    <>
      <div className='row justify-content-center'>
        <h3 className='text-center mb-3'>Mis datos</h3>
        <div className='col-6 '>
          <form className='container'>
            <input
              type='text'
              className='form-control my-3'
              placeholder='Nombre'
            />
            <input
              type='text'
              className='form-control my-3'
              placeholder='Correo'
            />
            <input
              type='password'
              className='form-control my-3'
              placeholder='clave'
            />
            <input
              type='text'
              className='form-control my-3'
              placeholder='dirección'
            />
          </form>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-2'>
          <button type='button' class='btn btn-outline-warning'>
            Editar
          </button>
        </div>
        <div className='col-2'>
          <button type='button' class='btn btn-outline-success'>
            Guardar
          </button>
        </div>
      </div>
    </>
  )
}
