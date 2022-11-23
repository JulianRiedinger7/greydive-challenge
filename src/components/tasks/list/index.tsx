import { Task } from '../../../interfaces/task';
import SingleTask from '../single';

interface Props {
	questions: Task[] | undefined;
}

function TaskList({ questions }: Props) {
	return (
		<>
			{questions?.map((question, index) => (
				<SingleTask key={index} question={question} index={index} />
			))}
		</>
	);
}

export default TaskList;
