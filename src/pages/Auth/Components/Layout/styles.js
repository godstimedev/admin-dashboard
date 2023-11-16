import styled from 'styled-components';
import { maxQuery } from '../../../../utilities';

export const Container = styled.div`
	height: 100vh;
	display: flex;

	${maxQuery('lg')} {
		min-height: 100vh;
		flex-direction: column;
	}

	.col--2 {
		flex: 1;
		background: ${({ theme }) => theme.colors.white};
		display: grid;
		place-content: center;
		${maxQuery('lg')} {
			min-height: 100vh;
		}
	}
`;
