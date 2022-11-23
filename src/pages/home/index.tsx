import { TestPreview } from '../../components';
import { useData } from '../../hooks/useData';

function Home() {
	const { data } = useData();
	return (
		<div className="py-20">
			<h1 className="text-4xl text-red-500 font-semibold text-center mb-3">
				Bienvenido a Greydive!
			</h1>
			<h2 className="text-lg text-white text-center">
				Selecciona el Test que quieres observar:
			</h2>

			<div className="flex justify-around flex-wrap">
				{data?.map((test) => (
					<TestPreview key={test.idVideo} test={test} />
				))}
			</div>
		</div>
	);
}

export default Home;
