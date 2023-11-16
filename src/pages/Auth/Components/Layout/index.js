import { Outlet } from 'react-router-dom';
import Welcome from '../Welcome';
import { Container } from './styles';

const Layout = () => {
	return (
		<Container>
			<Welcome />

			<div className="col--2">
				<Outlet />
			</div>
		</Container>
	);
};

export default Layout;
