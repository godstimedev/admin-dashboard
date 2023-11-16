import styled from 'styled-components';
import { maxQuery, minQuery } from '../../utilities';

export const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 1rem;
	margin-bottom: 0.75rem;
	${maxQuery('lg')} {
		flex-direction: column;
	}

	> h4 {
		${maxQuery('lg')} {
			width: 100%;
		}
	}

	> .welcome {
		${maxQuery('lg')} {
			display: none;
		}
	}

	.profile {
		:hover {
			svg {
				transform: rotate(180deg);
				transition: transform 0.3s ease-in-out;
			}
			.dropdown {
				display: block;
			}
		}
	}

	.initials {
		${({ theme }) => theme.mixins.text10};
		${({ theme }) => theme.fonts.crimsonPro};

		background: ${({ theme }) => theme.colors.accent600};
		color: ${({ theme }) => theme.colors.white};

		--size: 35px;
		width: var(--size);
		height: var(--size);
		font-weight: 600;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		text-transform: uppercase;
	}
	.dropdown--con {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		position: relative;
		cursor: pointer;
		${maxQuery('lg')} {
			display: none;
		}

		.name {
			${({ theme }) => theme.mixins.text16};

			font-weight: 600;
			text-transform: capitalize;
		}
		.role {
			${({ theme }) => theme.mixins.text12};

			color: ${({ theme }) => theme.colors.neutral500};
			text-transform: capitalize;
		}
	}
	.dropdown {
		background: ${({ theme }) => theme.colors.white};
		display: none;
		border-radius: 0.5rem;
		position: absolute;
		top: calc(100% + 0.5rem);
		right: 0;
		width: 100%;
		min-width: fit-content;
		z-index: 2;

		li {
			${({ theme }) => theme.mixins.text14};

			display: flex;
			align-items: center;
			gap: 0.5rem;
			padding: 0.5rem 1rem;
		}
	}
`;

export const MobileHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
	/* border: 1px solid red; */

	> svg {
		cursor: pointer;
	}
	${minQuery('lg')} {
		display: none;
	}
`;
