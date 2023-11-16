import { useState } from 'react';
import { CaretDownFill, Events, Logo, Menu } from '../../assets/svgs';
import MobileNav from '../../layout/MobileNav';
import { Header, MobileHeader } from './styles';

const PageHeader = ({ title, children }) => {
	const [nav, setNav] = useState(false);

	return (
		<Header>
			<MobileNav setNav={setNav} nav={nav} />
			<MobileHeader>
				<div>
					<Logo />
					{children}
				</div>
				<Menu onClick={() => setNav(!nav)} />
			</MobileHeader>

			{title && <h4>{title}</h4>}
			<div className="welcome">{children}</div>

			<div className="profile">
				<div className="dropdown--con" tabIndex={0}>
					<div className="initials">ft</div>

					<div>
						<div className="name">Frontend Team</div>
						<div className="role">Admin</div>
					</div>
					<CaretDownFill />

					<ul className="dropdown">
						<li>
							<Events /> Sign out
						</li>
					</ul>
				</div>
			</div>
		</Header>
	);
};

export default PageHeader;
