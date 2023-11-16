import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	.header {
		padding: 14px 2rem;
		border-radius: 16px 16px 0px 0px;
		background-color: ${({ department }) =>
			department === 'Programs Manager'
				? ({ theme }) => theme.colors.accent100
				: department === 'Business Operations'
				? ({ theme }) => theme.colors.success50
				: department === 'Marketing and Comms'
				? ({ theme }) => theme.colors.warning50
				: ({ theme }) => theme.colors.error50};
		display: flex;
		justify-content: space-between;
		align-items: center;

		> p {
			${({ theme }) => theme.mixins.text14}
			font-weight: 600;
		}

		> div {
			display: flex;
			align-items: center;
			gap: 0.6rem;
			cursor: pointer;

			> span {
				${({ theme }) => theme.mixins.text14}
				color: ${({ theme }) => theme.colors.primary700};
				font-weight: 600;
			}
		}
	}

	.permissions {
		padding: 1rem 2rem;
		border-radius: 0px 0px 16px 16px;
		background-color: ${({ theme }) => theme.colors.white};
		display: flex;
		align-items: center;
		gap: 1.2rem;
		flex-wrap: wrap;
	}
`;
