import styled from 'styled-components';

export const Container = styled.div`
	max-width: 360px;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;

	.mail--icon {
		width: fit-content;
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		h2 {
			${({ theme }) => theme.mixins.text40}
			color: #051A26;
		}
		p {
			${({ theme }) => theme.mixins.text16}
			color: ${({ theme }) => theme.colors.neutral900};

			strong {
				color: #051a26;
			}
		}
	}

	.button--con {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		> button {
			width: 100%;
			display: flex;
			justify-content: center;
		}
	}
`;
