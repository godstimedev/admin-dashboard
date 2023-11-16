import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {
	Dashboard,
	Playground,
	Events,
	Active,
	Potential,
	Auth,
	LoginForm,
	ResetPassword,
	CheckEmail,
	ChangePassword,
	Transactions,
	Profile,
	Departments,
	Users,
	AdminSettings,
} from './pages';
import { ApplyLayout } from './layout';
import { Approutes } from './constants';
import { GlobalStyles, theme } from './base';
import 'antd/dist/antd.min.css';

function App() {
	const auth = false;
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />

			<BrowserRouter>
				{auth ? (
					<Auth />
				) : (
					<Routes>
						{process.env.NODE_ENV === 'development' && (
							<Route path={Approutes.playground} element={<Playground />} />
						)}

						<Route element={<Auth />}>
							<Route path={Approutes.auth.login} element={<LoginForm />} />
							<Route path={Approutes.auth.resetPassword} element={<ResetPassword />} />
							<Route path={Approutes.auth.checkEmail} element={<CheckEmail />} />
							<Route path={Approutes.auth.changePassword} element={<ChangePassword />} />
							<Route path={'*'} element={<LoginForm />} />
						</Route>

						{/* Use Navbar on the side layout */}
						<Route element={<ApplyLayout />}>
							<Route path={Approutes.dashboard} element={<Dashboard />} />
							<Route path={Approutes.events} element={<Events />} />
							<Route path={Approutes.students.active} element={<Active />} />
							<Route path={Approutes.students.potential} element={<Potential />} />
							<Route path={Approutes.trainers.instructor} element={<Instructor />} />
							<Route path={Approutes.trainers.mentor} element={<Mentor />} />
							<Route path={Approutes.transactions} element={<Transactions />} />
							<Route path={'/adminSettings/'} element={<AdminSettings />}>
								<Route path={Approutes.adminSettings.profile} element={<Profile />} />
								<Route path={Approutes.adminSettings.department} element={<Departments />} />
								<Route path={Approutes.adminSettings.users} element={<Users />} />
							</Route>
							<Route
								path={Approutes.adminSettings.initial}
								element={<Navigate to={Approutes.adminSettings.profile} />}
							/>
						</Route>
					</Routes>
				)}
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;

const Instructor = () => {
	return <div>Instructor</div>;
};
const Mentor = () => {
	return <div>Mentor</div>;
};
