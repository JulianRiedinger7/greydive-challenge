import { Link } from 'react-router-dom';
import { Test } from '../../interfaces/test';

interface Props {
	test: Test;
}

function TestPreview({ test }: Props) {
	const { cliente, linkVideo, escenario } = test;

	return (
		<Link
			to={`/${cliente}`}
			className="text-white text-lg mt-10 h-80 flex flex-col justify-between border-2 border-white rounded-lg p-5 hover:shadow-md hover:shadow-red-300 transition-all ease-in-out"
		>
			<h2 className="text-red-500 text-2xl uppercase font-medium">{cliente}</h2>
			<h3 className="max-w-xs">{escenario}</h3>
			<iframe src={linkVideo} frameBorder="0"></iframe>
		</Link>
	);
}

export default TestPreview;
