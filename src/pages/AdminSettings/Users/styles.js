import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.div`
	.create--mobile {
		position: fixed;
		bottom: 0;
		right: 2rem;
		cursor: pointer;
		display: none;

		${maxQuery('md')} {
			display: block;
		}
	}
`;
