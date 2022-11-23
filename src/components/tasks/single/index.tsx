import { Task } from '../../../interfaces/task';

interface Props {
	question: Task;
	index: number;
}

function SingleTask({ question, index }: Props) {
	return (
		<div className="py-4">
			<div className="p-4">
				<h2 className="text-xl font-bold">Tarea: {index + 1}</h2>
				<p className="text-xl font-bold">{question.texto}</p>
				{question.tipoTarea !== 'verbalResponse' ? (
					<p className="my-2 font-medium text-lg">
						Respuesta: {question.respuesta}
					</p>
				) : null}
				<p className="text-orange-400 mt-4 text-lg">
					Duracion de la tarea: {question.tiempo}
				</p>
			</div>

			<hr className="mt-7" />
		</div>
	);
}

export default SingleTask;
