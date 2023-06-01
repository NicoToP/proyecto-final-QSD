export function NavRecordVertical() {
  return (
    <>
      <div className='form-outline my-2'>
        <select className='form-select' aria-label='Default select example'>
          <option selected>Selecciona la mascota</option>
          <option value='Nana'>Nana</option>
          <option value='Pepe'>Pepe</option>
        </select>
      </div>
      <nav class='nav flex-column'>
        <button type='button' class='btn btn-outline-primary my-2'>
          Baños
        </button>
        <button type='button' class='btn btn-outline-primary my-2'>
          Guardería
        </button>
        <button type='button' class='btn btn-outline-primary my-2'>
          Peluquería
        </button>
        <button type='button' class='btn btn-outline-primary my-2'>
          Consultas Virtuales
        </button>
        <button type='button' class='btn btn-outline-primary my-2'>
          consultas Presenciales
        </button>
      </nav>
    </>
  )
}
