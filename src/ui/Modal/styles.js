import styled, { css } from 'styled-components';
import { maxQuery } from '../../utilities';

export const ModalCon = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	background: rgba(9, 54, 84, 0.7);
	display: grid;
	place-items: center;
	${maxQuery('md')} {
		place-items: end;
	}

	.modal--content {
		position: relative;
		width: ${({ size }) => (size === 'large' ? '65%' : '450px')};
		height: fit-content;
		background: #fff;
		border-radius: 16px;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		${maxQuery('md')} {
			height: fit-content;
			width: 100%;
			gap: 1rem;
			padding: 1rem;
		}

		header {
			display: flex;
			justify-content: space-between;
			align-items: center;

			svg {
				position: absolute;
				right: 0;
				top: -40px;
				cursor: pointer;
			}

			h1 {
				color: #051a26;
				${({ theme }) => theme.mixins.text28}
			}

			p {
				color: ${({ theme }) => theme.colors.neutral500};
				${({ theme }) => theme.mixins.text12}

				span {
					color: #051a26;
					font-weight: 600;
				}
			}
		}

		${({ size }) =>
			size === 'small' &&
			css`
				form {
					display: flex;
					flex-direction: column;
					gap: 2rem;

					> .flex--group {
						display: flex;
						gap: 1rem;
						> div {
							flex: 1;
						}
					}
				}

				.button--group {
					display: flex;
					justify-content: space-between;
					/* margin-top: 3rem; */
				}

				.alert--container {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 1.25rem;
					text-align: center;

					.alert {
						width: 98px;
						height: 98px;
						background-color: #fee4e2;
						border-radius: 50%;
						display: flex;

						justify-content: center;
						align-items: center;
					}
					h1 {
						color: #051a26;
						${({ theme }) => theme.mixins.text28}
					}
					p {
						color: ${({ theme }) => theme.colors.neutral500};
						${({ theme }) => theme.mixins.text16}

						span {
							color: #051a26;
							font-weight: 600;
						}
					}
				}
			`}

		${({ size }) =>
			size === 'large' &&
			css`
				form {
					width: 100%;
					display: flex;
					flex-direction: column;
					gap: 1rem;
					${maxQuery('md')} {
						gap: 0.5rem;
					}

					> input {
						flex: 1 !important;
					}

					.input--con {
						display: flex;
						gap: 1rem;
						${maxQuery('md')} {
							flex-direction: column;
							gap: 0.5rem;
						}

						> div {
							flex: 1;
						}
					}
				}

				.button--group {
					display: flex;
					justify-content: space-between;

					div:first-child {
						${maxQuery('md')} {
							display: none;
						}
					}

					div:last-child {
						display: flex;
						gap: 1.5rem;
						${maxQuery('md')} {
							width: 100%;
							display: flex;
							justify-content: space-between;
						}
					}
				}
			`}
	}
`;
