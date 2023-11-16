import styled from 'styled-components';
import { minQuery } from '../../utilities';

export const Container = styled.div`
	${minQuery('lg')} {
		display: none;
	}

	.show {
		position: fixed;
		top: 0;
		left: 0;
		background: rgba(9, 54, 84, 0.7);
		width: 100%;
		height: 100%;
		z-index: 20;
		display: grid;
		place-items: left;
		transition: left 0.3s ease-in-out;
	}

	.close {
		position: fixed;
		top: 0;
		left: -100vw;
		transition: left 0.3s ease-in-out;
		z-index: 20;
	}
	> div {
		aside {
			position: relative;
			background: ${({ theme }) => theme.colors.white};
			border-radius: 0px 40px 40px 0px;
			padding: 3rem 0;
			width: 13.75rem;
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			overflow: auto;

			.logo {
				margin-bottom: 3.75rem;
			}

			nav {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex-grow: 1;

				.profile {
					margin-left: 1.25rem;
					:focus,
					:focus-within {
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
				/* .dropdown {
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
				} */
			}
			a.active li {
				color: ${({ theme }) => theme.colors.primary700};
				background: ${({ theme }) => theme.colors.primary100};
				border-right: 4px solid ${({ theme }) => theme.colors.primary700};

				font-weight: 600;

				span {
					display: none;
				}
				span.active {
					display: flex;
				}
			}
			li {
				${({ theme }) => theme.mixins.text14};

				padding: 1rem 2rem 1rem 1.25rem;
				display: flex;
				align-items: center;
				gap: 0.5rem;

				&.isDrop {
					display: block;
					padding: 0;

					&.hasActiveChild,
					:focus,
					:focus-within {
						ul {
							display: block;
						}
						.caret {
							transform: rotate(180deg);
							transition: transform 0.3s ease-in-out;
						}
					}

					> div {
						display: flex;
						align-items: center;
						gap: 0.5rem;
						padding: 1rem 2rem 1rem 1.25rem;
						cursor: pointer;

						svg:last-child {
							margin-left: auto;
						}
					}
					ul {
						display: none;
					}
					/* .caret {
				margin-left: auto;
			} */
					li {
						padding: 1rem 2rem 1rem 3.4375rem;
					}
				}

				span {
					display: flex;
					align-items: center;
				}
				span.active {
					display: none;
				}
			}
		}
	}
`;
