import styled, { css } from 'styled-components';
import { maxQuery } from '../../utilities';

export const Container = styled.div`
	/* width: 320px; */
	max-width: 100%;

	&.success {
		input {
			border-color: ${({ theme }) => theme.colors.success500};
		}

		.info--con {
			color: ${({ theme }) => theme.colors.success500};

			svg rect {
				fill: ${({ theme }) => theme.colors.success500};
			}
		}
	}
	&.warning {
		input {
			border-color: ${({ theme }) => theme.colors.warning500};
		}
		label {
			color: #051a26;
		}

		.info--con {
			color: ${({ theme }) => theme.colors.warning500};

			svg rect {
				fill: ${({ theme }) => theme.colors.warning500};
			}
		}
	}
	&.error {
		input {
			border-color: ${({ theme }) => theme.colors.error500};
		}

		.info--con {
			color: ${({ theme }) => theme.colors.error500};

			svg rect {
				fill: ${({ theme }) => theme.colors.error500};
			}
		}
	}

	.hidden {
		display: none;
	}

	.input--group {
		position: relative;
	}

	label:not([for='file']) {
		color: ${({ theme }) => theme.colors.neutral500};
		position: absolute;
		top: 0.375rem;
		left: 1rem;

		${({ size }) =>
			size === 'large' &&
			css`
				${({ theme }) => theme.mixins.text12};
			`}
		${({ size }) =>
			size === 'medium' &&
			css`
				${({ theme }) => theme.mixins.text10};
			`}

		span {
			color: ${({ theme }) => theme.colors.accent800};

			${({ size }) =>
				size === 'large' &&
				css`
					${({ theme }) => theme.mixins.text10};
				`}
			${({ size }) =>
				size === 'medium' &&
				css`
					${({ theme }) => theme.mixins.text8};
				`}
		}
	}

	input,
	select,
	textarea {
		${({ theme }) => theme.mixins.text14};

		border: 1px solid ${({ theme }) => theme.colors.neutral100};
		border-radius: 4px;
		padding: 1.5rem 1rem 0.1875rem 1rem;
		outline: none;
		width: 100%;
		background: transparent;

		option,
		::placeholder {
			color: ${({ theme }) => theme.colors.neutral500};
			${({ theme }) => theme.mixins.text14}
		}

		&.search {
			padding-top: 0.2rem;
			padding-bottom: 0.2rem;
			padding-left: 40px;
			border: 1px solid ${({ theme }) => theme.colors.neutral100};

			::placeholder {
				color: ${({ theme }) => theme.colors.neutral500};
				${({ theme }) => theme.mixins.text14}
			}
		}

		:focus {
			border: 1px solid ${({ theme }) => theme.colors.primary700};
		}
		:blank ~ label {
			color: ${({ theme }) => theme.colors.neutral500};
		}
		:disabled {
			color: ${({ theme }) => theme.colors.neutral400};
			background: ${({ theme }) => theme.colors.neutral50};

			~ label {
				&,
				span {
					color: ${({ theme }) => theme.colors.neutral400};
				}
			}
			~ .info--con {
				opacity: 0.5;
			}
		}

		${({ size }) =>
			size === 'large' &&
			css`
				${({ theme }) => theme.mixins.text14};
			`}
		${({ size }) =>
			size === 'medium' &&
			css`
				${({ theme }) => theme.mixins.text14};

				/* padding: 1.5rem 1rem 0.1875rem 1rem; */
				padding: 1.1rem 1rem 0rem 1rem;
			`}

		+ svg {
			/* --inputHeight: calc(
				(0.875rem * 2 + 0.1875rem * 2) / 2
			); // Padding and font size and line height of the input box */

			position: absolute;
			top: 50%;
			left: 4%;
			transform: translateY(-50%);
			pointer-events: none;

			${({ size }) =>
				size === 'medium' &&
				css`
					--inputHeight: calc((0.75rem * 2 + 0.1875rem * 2) / 2);

					width: 1rem;
				`}
		}

		${maxQuery('lg')} {
			${({ theme }) => theme.mixins.text14};

			/* padding: 1.5rem 1rem 0.1875rem 1rem; */
			padding: 1.1rem 1rem 0rem 1rem;
		}
	}

	select {
		padding: 1.5rem 1rem 0.66rem 1rem;
	}

	textarea {
		height: 6rem;
		/* padding: 1.2em; */
		resize: none;
	}

	.info--con {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-top: 0.5rem;
		/* color: ${({ theme }) => theme.colors.black}; */
		color: red !important;

		svg rect {
			fill: ${({ theme }) => theme.colors.error500};
		}

		${({ size }) =>
			size === 'large' &&
			css`
				${({ theme }) => theme.mixins.text12};
			`}
		${({ size }) =>
			size === 'medium' &&
			css`
				${({ theme }) => theme.mixins.text10};

				margin-top: 0.375rem;
			`}

		/* .info {
			.info--con {
				
			}
		} */
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

	.icon {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 1rem;
		display: grid;
		place-items: center;

		> svg {
			cursor: pointer;
		}
	}
	.file--label {
		cursor: pointer;
		input[type='file'] {
			display: none !important;
			cursor: pointer;
		}
	}
`;
