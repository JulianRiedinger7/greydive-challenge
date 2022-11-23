import { Task } from '../../../interfaces/task';
import SingleTask from '../single';

interface Props {
	questions: Task[] | undefined;
}

function TaskList({ questions }: Props) {
	const tiposRespuesta = questions?.map((question) => question.tipoTarea);

	console.log(tiposRespuesta);

	return (
		<>
			{questions?.map((question, index) => (
				<SingleTask question={question} index={index} />
			))}
		</>
	);
}

export default TaskList;
