import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, Test } from './pages';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:cliente" element={<Test />} />
			</Routes>
		</Layout>
	);
}

export default App;
