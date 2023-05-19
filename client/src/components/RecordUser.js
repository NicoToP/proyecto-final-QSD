import { TableHisto } from './TableHisto';
import { useState } from 'react';

export function RecordUser() {
	const [tableActive, setTableActive] = useState('');

	let tableRendered, title;

	const changeTable = component => {
		setTableActive(component);
	};

	const mensaje = () => {
		if (tableActive === '')
			return (
				<h5 className='bg-primary bg-opacity-25 p-3 rounded-3'>
					¿Cuál historial deseas ver?
				</h5>
			);
	};

	switch (tableActive) {
		case 'banos':
			title = 'Baños';
			tableRendered = <TableHisto />;
			break;
		case 'guarderia':
			title = 'Guardería';
			tableRendered = <TableHisto />;
			break;
		case 'peluqueria':
			title = 'Peluquería';
			tableRendered = <TableHisto />;
			break;
		case 'virtuales':
			title = 'Consulta Virtual';
			tableRendered = <TableHisto />;
			break;
		case 'presenciales':
			title = 'Consulta Presencial';
			tableRendered = <TableHisto />;
			break;
		default:
			tableRendered = null;
	}

	return (
		<>
			<div className='container-fluid d-flex justify-content-center'>
				{mensaje()}
			</div>
			<nav class='nav d-flex justify-content-evenly m-2'>
				<button
					onClick={() => changeTable('banos')}
					type='button'
					class='btn btn-outline-primary my-2'
				>
					Baños
				</button>
				<button
					onClick={() => changeTable('guarderia')}
					type='button'
					class='btn btn-outline-primary my-2'
				>
					Guarderia
				</button>
				<button
					onClick={() => changeTable('peluqueria')}
					type='button'
					class='btn btn-outline-primary my-2'
				>
					Peluqueria
				</button>
				<button
					onClick={() => changeTable('virtuales')}
					type='button'
					class='btn btn-outline-primary my-2'
				>
					Consultas Virtuales
				</button>
				<button
					onClick={() => changeTable('presenciales')}
					type='button'
					class='btn btn-outline-primary my-2'
				>
					consultas Presenciales
				</button>
			</nav>

			<h2 className='text-center'>{title}</h2>
			<div className='table-responsive p-2 m-2'>{tableRendered}</div>
		</>
	);
}
