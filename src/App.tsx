import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Client, Home } from './pages';

function App() {
	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:cliente" element={<Client />} />
			</Routes>
		</Layout>
	);
}

export default App;
