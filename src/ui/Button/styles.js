import styled, { css, keyframes } from 'styled-components';

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`;

export const StyledButton = styled.button`
	${({ theme }) => theme.mixins.text16};

	border-radius: 80px;
	min-height: 52px; // size === large
	padding: 0.625rem 1.25rem; //type === primary
	display: flex;
	align-items: center;
	gap: 0.5rem;

	:disabled {
		opacity: 0.3;
		cursor: no-drop;
	}

	/* Type start */
	${({ type }) =>
		type === 'primary' &&
		css`
			background: ${({ theme }) => theme.colors.primary600};
			color: ${({ theme }) => theme.colors.primary50};

			:hover {
				background: ${({ theme }) => theme.colors.primary700};
			}
			:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
				background: ${({ theme }) => theme.colors.primary600};
			}
		`};
	${({ type }) =>
		type === 'secondary' &&
		css`
			color: ${({ theme }) => theme.colors.primary700};
			border: 1px solid ${({ theme }) => theme.colors.primary700};
			background: transparent;

			:hover {
				color: ${({ theme }) => theme.colors.primary800};
				border-color: ${({ theme }) => theme.colors.primary800};
			}
			:focus {
				border-color: transparent;
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ type }) =>
		type === 'subtle' &&
		css`
			background: ${({ theme }) => theme.colors.primary200};
			color: ${({ theme }) => theme.colors.primary700};

			:hover {
				background: ${({ theme }) => theme.colors.primary300};
			}
			:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
				background: ${({ theme }) => theme.colors.primary100};
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ type }) =>
		type === 'error' &&
		css`
			background: ${({ theme }) => theme.colors.error50};
			color: ${({ theme }) => theme.colors.error500};

			:hover {
				/* background: ${({ theme }) => theme.colors.error500}; */
				opacity: 0.8;
			}
			:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.error50};
				/* background: ${({ theme }) => theme.colors.error100}; */
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ type }) =>
		type === 'danger' &&
		css`
			background: ${({ theme }) => theme.colors.error500};
			color: ${({ theme }) => theme.colors.error50};

			:hover {
				/* background: ${({ theme }) => theme.colors.error500}; */
				opacity: 0.8;
			}
			:focus {
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.error50};
				/* background: ${({ theme }) => theme.colors.error100}; */
			}

			svg {
				stroke: ${({ theme }) => theme.colors.primary700};
			}
		`};
	${({ type }) =>
		type === 'text' &&
		css`
			color: ${({ theme }) => theme.colors.primary700};
			background: transparent;

			:hover {
				color: ${({ theme }) => theme.colors.primary900};
			}
			:focus {
				color: ${({ theme }) => theme.colors.primary300};
				box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary200};
			}
		`};
	/* Type end */

	/* Size start */
	${({ size }) =>
		size === 'medium' &&
		css`
			${({ theme }) => theme.mixins.text14};

			min-height: 44px;
			padding: 0.5rem 1rem;
		`};
	${({ size }) =>
		size === 'small' &&
		css`
			${({ theme }) => theme.mixins.text14};

			min-height: 36px;
			padding: 0.25rem 1rem;
		`};
	/* Size end */

	.spinner {
		animation: ${rotate} 1s infinite linear;

		${({ type }) =>
			type !== 'primary' &&
			css`
				path {
					stroke: ${({ theme }) => theme.colors.primary700};
				}
			`};

		${({ size }) =>
			size === 'medium' &&
			css`
				width: 17px;
			`};
		${({ size }) =>
			size === 'small' &&
			css`
				width: 14px;
			`};
	}
`;
