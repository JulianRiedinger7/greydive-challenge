import { useParams } from 'react-router-dom';
import { TaskList } from '../../components';
import { useData } from '../../hooks/useData';

function Test() {
	const { data } = useData();
	const { cliente } = useParams();

	const info = data.find((test) => test.cliente === cliente);

	const transcriptionArray = info?.transcripcion.split('<br>');

	return (
		<section className="text-white py-20">
			<h1 className="text-5xl font-bold uppercase text-center">
				{info?.cliente}
			</h1>
			<h2 className="text-2xl font-bold py-2">
				Test: Test de usabilidad en el sitio web
			</h2>
			<h3 className="text-2xl font-bold py-2">Testeador 1</h3>
			<video src={info?.linkVideo} controls></video>

			<h3 className="text-2xl font-bold py-4">Transcripcion</h3>
			<div className="max-w-2xl">
				<div className="h-80 overflow-scroll overflow-x-hidden">
					{transcriptionArray?.map((sentence, i) => (
						<p key={i} className="text-lg px-7 leading-7">
							{sentence} <br />
						</p>
					))}
				</div>
				<h3 className="text-2xl font-bold py-10">Tareas</h3>
				<div className="max-w-xl">
					<h4 className="text-lg font-medium py-2">
						Escenario: {info?.escenario}
					</h4>
					<hr />
				</div>
				<TaskList questions={info?.preguntas} />
			</div>
		</section>
	);
}

export default Test;
