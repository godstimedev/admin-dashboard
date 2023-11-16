import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	gap: 0.7rem;
	align-items: center;
	padding: 0.2rem 0.6rem;
	border-radius: 360px;
	background-color: ${({ theme }) => theme.colors.secondary400};
	font-weight: 600;

	> div:first-child {
		display: flex;
		align-items: center;
		gap: 0.4rem;

		> span {
			color: ${({ theme }) => theme.colors.white};
			${({ theme }) => theme.mixins.text12}
			font-weight: 600;
		}
	}

	.action {
		svg {
			cursor: pointer;
		}
	}
`;
