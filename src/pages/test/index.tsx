import { useParams } from 'react-router-dom';
import { TaskList } from '../../components';
import { useData } from '../../hooks/useData';

function Test() {
	const { data } = useData();
	const { cliente } = useParams();

	const info = data.find((test) => test.cliente === cliente);

	return (
		<section className="text-white py-20">
			<h1 className="text-4xl font-bold uppercase">{info?.cliente}</h1>
			<h2 className="text-2xl font-bold py-2">
				Test: Test de usabilidad en el sitio web
			</h2>
			<h3 className="text-2xl font-bold py-2">Testeador 1</h3>
			<video src={info?.linkVideo} controls autoPlay muted></video>
			<h3 className="text-2xl font-bold py-2">Transcripcion</h3>
			<div className="max-w-lg">
				<div className="h-80 overflow-scroll overflow-x-hidden">
					<p className="whitespace-pre-line">
						{info?.transcripcion.replace(/$/gm, '<br>')}
					</p>
				</div>
				<h3 className="text-2xl font-bold py-10">Tareas</h3>
				<h4 className="text-lg font-medium py-2">
					Escenario: {info?.escenario}
				</h4>
				<hr />
				<TaskList questions={info?.preguntas} />
			</div>
		</section>
	);
}

export default Test;
