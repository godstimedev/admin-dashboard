import { NavLink, Outlet } from 'react-router-dom';
import { PageHeader } from '../../../components';
import { Approutes } from '../../../constants';
import { Container } from './styles';

const AdminSettings = () => {
	return (
		<Container>
			<PageHeader title={'Admin Settings'} />

			<div className="settings">
				<ul className="navigation">
					<NavLink to={Approutes.adminSettings.profile}>
						<li>Profile</li>
					</NavLink>
					<NavLink to={Approutes.adminSettings.department}>
						<li>Departments</li>
					</NavLink>
					<NavLink to={Approutes.adminSettings.users}>
						<li>Users</li>
					</NavLink>
				</ul>

				<Outlet />
			</div>
		</Container>
	);
};

export default AdminSettings;
