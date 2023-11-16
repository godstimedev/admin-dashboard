// import { Link } from 'react-router-dom';
// import { Approutes } from '../../../constants';
import { Mail } from '../../../assets/images';
import { Button } from '../../../ui';
import { Container } from './styles';

const CheckEmail = () => {
	return (
		<Container>
			<div className="mail--icon">
				<img src={Mail} alt="" />
			</div>

			<div className="header">
				<h2>Check your email</h2>
				<p>
					Your administrator has sent a new password to your email address{' '}
					<strong>johndoe@gmail.com</strong>
				</p>
			</div>

			<div className="button--con">
				<Button>I have received it</Button>
				<Button type="secondary">Resend</Button>
			</div>
		</Container>
	);
};

export default CheckEmail;
