import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	padding: 3rem;
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	${maxQuery('md')} {
		padding: 3rem 1.5rem;
	}

	h6 {
		color: #23262f;
	}
	h5 {
		${({ theme }) => theme.mixins.text16}
		color: #23262F;
	}

	p {
		${({ theme }) => theme.mixins.text14}
		color: #777E91;
	}

	.profile--details {
		display: flex;
		gap: 6rem;

		${maxQuery('md')} {
			flex-direction: column;
			align-items: center;
			> div {
				width: 100%;
			}
		}

		> div:first-child {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 1rem;

			/* label {
				cursor: pointer;
				input[type='file'] {
					display: none !important;
					cursor: pointer;
				}
			} */

			img {
				width: 128px;
				height: 128px;
				border-radius: 160px;
			}
		}

		> div:last-child {
			flex: 1;
			max-width: 352px;
			display: flex;
			flex-direction: column;
			gap: 2rem;

			> div {
				form {
					display: flex;
					flex-direction: column;
					gap: 1rem;
					margin-top: 0.6rem;
				}

				button {
					margin-top: 2rem;
					margin-bottom: 2rem;
					margin-left: auto;
				}
			}

			> div:first-child {
				border-bottom: 1px solid #e6e8ec;
			}

			.role {
				padding: 0.5rem 1rem;
				background-color: ${({ theme }) => theme.colors.neutral100};
				border-radius: 4px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				> p {
					${({ theme }) => theme.mixins.text14}
					color: ${({ theme }) => theme.neutral500};
					font-weight: 600;
				}

				span {
					padding: 7px 1rem;

					background-color: ${({ theme }) => theme.colors.neutral100};
					border: 1px solid ${({ theme }) => theme.colors.neutral400};
					border-radius: 360px;

					> p {
						color: ${({ theme }) => theme.colors.neutral500};
						${({ theme }) => theme.mixins.text12}
						font-weight: 600;
					}
				}
			}
		}
	}
`;
