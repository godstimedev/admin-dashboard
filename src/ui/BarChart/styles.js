import styled from 'styled-components';

export default styled.div`
	.bar--title {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 1rem auto;

		span {
			${({ theme }) => theme.mixins.text12}
			color: ${({ theme }) => theme.colors.neutral500};
		}

		h1 {
			${({ theme }) => theme.mixins.text33}
			color: #051A26;
		}
	}
`;
