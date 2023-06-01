export function ContactUsPage() {
  return (
    <>
      <h1 className='text-center m-4 p-2'>¿Necesitas ayuda?</h1>

      <div className='row m-5 bg-secondary bg-opacity-10 rounded-4 p-3'>
        <div className='col-md-7 col-sm-12 p-5'>
          <h1 className='text-center mb-5'>~ Contactanos ~</h1>
          <span className='fs-5'>
            Dejanos tus datos y te contactaremos lo más pronto posible.
          </span>

          <div className='row my-2'>
            <div className='col'>
              <label for='inputName' class='form-label'>
                Nombres
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Andrea...'
                aria-label='First name'
              />
            </div>
            <div className='col'>
              <label for='inputLastName' class='form-label'>
                Apellidos
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='Flores...'
                aria-label='Last name'
              />
            </div>
          </div>
          <div className='row my-2'>
            <div className='col'>
              <label for='inputEmail' class='form-label'>
                Correo
              </label>
              <input
                type='email'
                className='form-control'
                placeholder='peludito500@adorable.com'
                aria-label='Email'
              />
            </div>
            <div className='col'>
              <label for='inputPhone' class='form-label'>
                Celular
              </label>
              <input
                type='text'
                className='form-control'
                placeholder='3154756231'
                aria-label='Last name'
              />
            </div>
          </div>
          <div className='d-grid gap-2 col-2 my-4 mx-auto'>
            <button type='submit' className='btn py-2 btn-primary'>
              Contactar
            </button>
          </div>
        </div>

        <div className='col-md-5 col-sm-12 align-self-center'>
          <img
            className='img-fluid mx-auto d-block '
            src='/img/vetAsk.png'
            alt=''
            height='400'
            width='400'
          />
        </div>
      </div>
    </>
  )
}
