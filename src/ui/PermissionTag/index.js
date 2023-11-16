import { PermitIcon, PermitRemove } from '../../assets/svgs';
import { Container } from './styles';

const PermissionTag = ({ name, handleRemove }) => {
	return (
		<Container>
			<div>
				<PermitIcon />
				<span>{name}</span>
			</div>
			<div className="action">
				<PermitRemove onClick={handleRemove} />
			</div>
		</Container>
	);
};

export default PermissionTag;
