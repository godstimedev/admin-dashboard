import { Link, NavLink, useLocation } from 'react-router-dom';
import { Container } from './styles';
import { Approutes } from '../../constants';
import {
	CaretDown,
	Dashboard,
	DashboardActive,
	Events,
	EventsActive,
	Logo,
	Logout,
	Setting,
	SettingActive,
	Students,
	Trainers,
	Transactions,
	TransactionsActive,
} from '../../assets/svgs';
import { useEffect, useRef } from 'react';

const MobileNav = ({ setNav, nav }) => {
	const { pathname } = useLocation();

	const navRef = useRef();

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (navRef.current && !navRef.current.contains(e.target)) {
				setNav(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [setNav]);
	return (
		<Container>
			<div className={nav ? 'show' : 'close'}>
				<aside ref={navRef}>
					<div className="logo">
						<Logo />
					</div>

					<nav>
						<ul>
							{navList.map((list) =>
								list.menu ? (
									<li
										className={`isDrop ${pathname.includes(list.link) ? 'hasActiveChild' : ''}`}
										key={list.name}
									>
										<div tabIndex={0}>
											<span>{list.svg.default}</span> {list.name} <CaretDown className="caret" />
										</div>

										<ul>
											{list.menu.map((child) => (
												<NavLink key={child.name} to={child.link} end>
													<li>{child.name}</li>
												</NavLink>
											))}
										</ul>
									</li>
								) : (
									<NavLink key={list.name} to={list.link} end>
										<li>
											<span className="active">{list.svg.active}</span> <span>{list.svg.default}</span>{' '}
											{list.name}
										</li>
									</NavLink>
								)
							)}
						</ul>

						<ul>
							<Link to={Approutes.auth.login}>
								<li>
									<Logout /> Logout
								</li>
							</Link>
						</ul>

						<div className="profile">
							<div className="dropdown--con" tabIndex={0}>
								<div className="initials">ft</div>

								<div>
									<div className="name">Frontend Team</div>
									<div className="role">Admin</div>
								</div>
								{/* <CaretDownFill /> */}

								{/* <ul className="dropdown">
									<li>
										<Events /> Sign out
									</li>
								</ul> */}
							</div>
						</div>
					</nav>
				</aside>
			</div>
		</Container>
	);
};

export default MobileNav;

const navList = [
	{
		name: 'Dashboard',
		link: Approutes.dashboard,
		svg: {
			default: <Dashboard />,
			active: <DashboardActive />,
		},
	},
	// {
	// 	name: 'Playground',
	// 	link: Approutes.playground,
	// 	svg: {
	// 		default: <Events />,
	// 		active: <EventsActive />,
	// 	},
	// },
	{
		name: 'Events',
		link: Approutes.events,
		svg: {
			default: <Events />,
			active: <EventsActive />,
		},
	},

	{
		name: 'Students',
		link: Approutes.students.initial,
		svg: {
			default: <Students />,
		},
		menu: [
			{ name: 'Active', link: Approutes.students.active },
			{ name: 'Potential', link: Approutes.students.potential },
		],
	},
	{
		name: 'Trainers',
		link: Approutes.trainers.initial,
		svg: {
			default: <Trainers />,
		},
		menu: [
			{ name: 'Instructor', link: Approutes.trainers.instructor },
			{ name: 'Mentor', link: Approutes.trainers.mentor },
		],
	},
	{
		name: 'Transactions',
		link: Approutes.transactions,
		svg: {
			default: <Transactions />,
			active: <TransactionsActive />,
		},
	},
	{
		name: 'Admin Settings',
		link: Approutes.adminSettings.initial,
		svg: {
			default: <Setting />,
			active: <SettingActive />,
		},
	},
];
