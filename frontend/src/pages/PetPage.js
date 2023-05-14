import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import {usePets} from '../context/petContext';

export function PetPage() {
  const {createPet} = usePets();
  const navigate = useNavigate();

  return (
    <div>
      <Formik
        initialValues={{
          namePet: '',
          species: '',
          breed: '',
          weight: '',
          dateBirth: '',
          description: '',
        }}
        validationSchema={Yup.object({
          namePet: Yup.string().required('El Nombre es requerido'),
          species: Yup.string().required('La especie es requerida'),
          breed: Yup.string().required('La raza es requerida'),
          weight: Yup.string().required('Peso requerido'),
          dateBirth: Yup.date().required('fecha de nacimiento requerido'),
          description: Yup.string(),
        })}
        onSubmit={async (values, actions) => {
          await createPet(values);
          navigate('/');
        }}
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
  );
}
