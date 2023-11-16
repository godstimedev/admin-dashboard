import styled from 'styled-components';
import { maxQuery } from '../../../utilities';

export const Container = styled.div`
	.modal--content {
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

		.notification {
			background-color: ${({ theme }) => theme.colors.warning50};
			padding: 0.5rem 1rem;
			display: flex;
			gap: 0.8rem;
			width: fit-content;
			border-radius: 16px;

			p {
				${({ theme }) => theme.mixins.text12}
				color: ${({ theme }) => theme.colors.warning500};
			}
		}

		form {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			${maxQuery('md')} {
				gap: 0.5rem;
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

			.input {
				position: relative;

				label {
					position: absolute;
					top: 0.375rem;
					left: 1rem;
					${({ theme }) => theme.mixins.text12}
					color: ${({ theme }) => theme.colors.neutral500};
				}

				input,
				select {
					border: 1px solid #e7eaee;
					border-radius: 4px;
					padding: 1.5rem 1rem 0.1875rem 1rem;
					width: 100%;
					flex: 1;
					${maxQuery('md')} {
						padding: 1rem 0.7rem 0.1rem 0.8rem;
					}

					option,
					::placeholder {
						color: ${({ theme }) => theme.colors.neutral500};
						${({ theme }) => theme.mixins.text14}
					}

					:focus {
						outline: none;
					}
				}

				.currency {
					position: absolute;
					right: 0;
					top: 0;
					bottom: 0;
					width: 72px;
					color: ${({ theme }) => theme.colors.neutral400};
					background: ${({ theme }) => theme.colors.neutral50};
					border-radius: 0px 4px 4px 0px;
					border: 1px solid #d0d5dd;
					display: flex;
					justify-content: center;
					align-items: center;
					${({ theme }) => theme.mixins.text14}
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
	}
`;
