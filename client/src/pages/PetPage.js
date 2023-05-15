import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate, useParams, Link} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {usePets} from '../context/petContext';

export function PetPage() {
  const {getPet, createPet, updatePet} = usePets();
  const navigate = useNavigate();
  const params = useParams();
  const [pet, setPet] = useState({
    namePet: '',
    species: '',
    breed: '',
    weight: '',
    dateBirth: '',
    description: '',
  });

  useEffect(() => {
    (async () => {
      if (params.id) {
        const res = await getPet(params.id);
        setPet(res.data);
      }
    })();
  }, [params.id]);

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="shadow p-3 my-5 bg-info rounded">
        <header className="d-flex justify-content-between align-items-center py-4 text-white">
          <h3>New Pet</h3>
          <Link to="/">Regresar</Link>
        </header>
        <Formik
          initialValues={pet}
          validationSchema={Yup.object({
            namePet: Yup.string().required('El Nombre es requerido'),
            species: Yup.string().required('La especie es requerida'),
            breed: Yup.string().required('La raza es requerida'),
            weight: Yup.string().required('Peso requerido'),
            dateBirth: Yup.date().required('Fecha requerida'),
            description: Yup.string(),
          })}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updatePet(params.id, values);
            } else {
              await createPet(values);
            }

            navigate('/');
          }}
          enableReinitialize
        >
          {({handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
              <div className="my-3">
                <Field
                  name="namePet"
                  type="text"
                  id="name-pet"
                  placeholder="Nombre"
                  className="form-control"
                  aria-describedby="namePet"
                />
                <ErrorMessage
                  name="namePet"
                  component="div"
                  className="form-text text-danger"
                  id="namePet"
                />
              </div>

              <div className="my-3">
                <Field
                  name="species"
                  type="species"
                  id="species"
                  placeholder="Especie"
                  className="form-control"
                />
                <ErrorMessage
                  name="species"
                  component="div"
                  className="form-text text-danger"
                  id="namePet"
                />
              </div>
              <div className="my-3">
                <Field
                  name="breed"
                  type="breed"
                  id="breed"
                  placeholder="Raza"
                  className="form-control"
                />
                <ErrorMessage
                  name="breed"
                  component="div"
                  className="form-text text-danger"
                  id="namePet"
                />
              </div>
              <div className="my-3">
                <Field
                  name="weight"
                  type="number"
                  id="weight"
                  placeholder="Peso"
                  className="form-control"
                />
                <ErrorMessage
                  name="weight"
                  component="div"
                  className="form-text text-danger"
                  id="namePet"
                />
              </div>
              <div className="my-3">
                <Field
                  name="dateBirth"
                  type="date"
                  id="date-birth"
                  placeholder="Fecha de nacimiento"
                  className="form-control"
                />
                <ErrorMessage
                  name="dateBirth"
                  component="div"
                  className="form-text text-danger"
                  id="namePet"
                />
              </div>
              <div className="my-3">
                <Field
                  name="description"
                  component="textarea"
                  placeholder="Descripcion"
                  className="form-control"
                />
                <ErrorMessage
                  name="description"
                  component="div"
                  className="form-text text-danger"
                  id="namePet"
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
