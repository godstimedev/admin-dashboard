import { Spinner } from '../../assets/svgs';
import { StyledButton } from './styles';

const Button = (props) => {
	const { type = 'primary', size = 'medium', loading, children, ...rest } = props;

	return (
		<StyledButton type={type} size={size} {...rest}>
			{loading ? type === 'text' ? 'Loading...' : <Spinner className="spinner" /> : children}
		</StyledButton>
	);
};

export default Button;
