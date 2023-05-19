import { Profile } from '../components/Profile';
import { AppointmentForm } from '../components/AppointmentForm';
import { RecordUser } from '../components/RecordUser';
import { useState } from 'react';

export function UserPage() {
	const [componentActive, setComponentActive] = useState('');

	const changeComponent = component => {
		setComponentActive(component);
	};

	let componentRendered;

	const mensaje = () => {
		if (componentActive === '')
			return (
				<h2 className='text-center bg-primary bg-opacity-25 p-3 rounded-3'>
					No has seleccionado ninguna pestaña
				</h2>
			);
	};
	switch (componentActive) {
		case 'info':
			componentRendered = <Profile />;
			break;
		/* case "mascotas":
      componentRendered = < />;
      break; */
		case 'historial':
			componentRendered = <RecordUser />;
			break;
		case 'agendar':
			componentRendered = <AppointmentForm />;
			break;
		default:
			componentRendered = null;
	}

	return (
		<>
			<div className='row'>
				<div className='col-2 align-self-center mx-auto bg-secondary bg-opacity-10 rounded-3 p-4'>
					<p className='fs-5 text-center fw-bold bg-primary rounded-3 p-2 bg-opacity-25'>
						¿Qué deseas hacer?
					</p>
					<nav class='nav flex-column justify-content-around'>
						<button
							onClick={() => changeComponent('info')}
							type='button'
							class='btn btn-outline-primary my-2'
						>
							Mi info
						</button>
						<button
							onClick={() => changeComponent('mascotas')}
							type='button'
							class='btn btn-outline-primary my-2'
						>
							Registro mascotas
						</button>
						<button
							onClick={() => changeComponent('historial')}
							type='button'
							class='btn btn-outline-primary my-2'
						>
							Historial
						</button>
						<button
							onClick={() => changeComponent('agendar')}
							type='button'
							class='btn btn-outline-primary my-2'
						>
							Agendar cita
						</button>
					</nav>
				</div>
				<div className='col-8 mx-auto bg-secondary bg-opacity-10 rounded-3 p-4'>
					{mensaje()}
					{/*  <h2 className="text-center">Seleccione una opción</h2> */}
					{componentRendered}
					{/* <Profile/> */}
					{/* <AppointmentForm/> */}
					{/* <RecordUser/>*/}
				</div>
			</div>
		</>
	);
}
