import { useParams } from 'react-router-dom';
import { useData } from '../../hooks/useData';

function Client() {
	const { data } = useData();
	const { cliente } = useParams();

	const info = data.find((test) => test.cliente === cliente);

	return (
		<div className="text-white">
			<h1>{info?.cliente}</h1>
		</div>
	);
}

export default Client;
