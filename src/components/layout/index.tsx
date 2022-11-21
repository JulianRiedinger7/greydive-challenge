import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
	children: ReactNode;
}

function Layout({ children }: Props) {
	return (
		<main className="min-h-screen bg-[#292643]">
			<section className="max-w-6xl mx-auto py-10 px-4">
				<Link to="/">
					<img
						src="https://uploads-ssl.webflow.com/612fcc289671bc539ecd004e/63597a7833dba6e559436f89_LOGO-simulacr-blanco.dccda331476ff5c519dd-p-500.png"
						alt="simulacr"
						className="w-48"
					/>
				</Link>
				{children}
			</section>
		</main>
	);
}

export default Layout;
