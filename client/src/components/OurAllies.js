export function OurAllies() {
  return (
    <>
      <div className='container-fluid mb-5'>
        <div className='row mb-5'>
          <div className='col-sm-12 col-md-12 col-xl-12'>
            <h2 className='text-center'>LOS MEJORES ALIADOS</h2>
          </div>
        </div>

        <div
          id='carouselExampleInterval'
          className='carousel slide'
          data-bs-ride='carousel'
        >
          <div className='carousel-inner'>
            <div className='carousel-item active' data-bs-interval='10000'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/RrCquT'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/Mcxhpj'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/P3SOkq'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/40JAHV'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/Q11O7G'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
              </div>
            </div>
            <div className='carousel-item' data-bs-interval='2000'>
              <div className='row justify-content-center align-items-center'>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/j8CNLD'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/LP3AFF'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/rYEltE'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/EKnu1p'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
                <div className='col-xs-1 col-sm-2 col-md-2 col-lg-2 col-xl-2'>
                  <img
                    src='https://acortar.link/k9nhqD'
                    className='d-block w-50 p-auto m-auto'
                    alt='...'
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className='carousel-control-prev'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='prev'
          >
            <span
              className='carousel-control-prev-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Previous</span>
          </button>
          <button
            className='carousel-control-next'
            type='button'
            data-bs-target='#carouselExampleInterval'
            data-bs-slide='next'
          >
            <span
              className='carousel-control-next-icon'
              aria-hidden='true'
            ></span>
            <span className='visually-hidden'>Next</span>
          </button>
        </div>
      </div>
    </>
  )
}
