import styled from 'styled-components';
import { maxQuery } from '../../../../utilities';

export const Container = styled.div`
	flex: 1;
	background: linear-gradient(134.88deg, #0396ff 0%, #abdcff 137.15%);
	display: grid;
	align-items: center;
	${maxQuery('lg')} {
		min-height: 100vh;
	}

	> div {
		padding: 0 6rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		${maxQuery('lg')} {
			padding: 2rem;
		}

		h1 {
			${({ theme }) => theme.mixins.text60}
			${({ theme }) => theme.fonts.inter}
				color: ${({ theme }) => theme.colors.primary50};
			font-weight: 500;
		}
	}
`;
