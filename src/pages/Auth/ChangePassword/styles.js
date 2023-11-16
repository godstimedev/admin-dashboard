import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	max-width: 360px;

	.form--header {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;

		h2 {
			${({ theme }) => theme.mixins.text40}
			color: #051A26;
		}
		p {
			${({ theme }) => theme.mixins.text16}
			color: ${({ theme }) => theme.colors.neutral500};
		}
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		> div {
			position: relative;

			label {
				position: absolute;
				left: 1rem;
				top: 0.275rem;
				${({ theme }) => theme.mixins.text12}
				color: ${({ theme }) => theme.colors.neutral500};
				font-weight: 400;
			}

			input {
				width: 100%;
				border: 1px solid ${({ theme }) => theme.colors.neutral100};
				padding: 1rem 1rem 0rem 1rem;
				border-radius: 4px;

				::placeholder {
					${({ theme }) => theme.mixins.text14}
					color: ${({ theme }) => theme.colors.neutral400};
					font-weight: 400;
				}
			}
		}
		.form--valid {
			display: flex;
			flex-direction: column;
			gap: 0.5rem;

			> div {
				display: flex;
				align-items: center;
				gap: 1rem;

				p {
					${({ theme }) => theme.mixins.text12}
					color: ${({ theme }) => theme.colors.neuutral700};
				}

				span {
					width: 1rem;
					height: 1rem;
					border-radius: 100%;
					border: 0.8px solid ${({ theme }) => theme.colors.neutral300};
				}
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
