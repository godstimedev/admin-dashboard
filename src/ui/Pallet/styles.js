import styled from 'styled-components';

export const PalletCon = styled.div`
	padding: 1.5rem 1.25rem;
	box-shadow: 0 0 0 6px ${({ theme }) => theme.colors.white};
	border-radius: 0.5rem;
	width: 15.5rem;
	max-width: 100%;
	position: relative;
	background-color: ${({ backgroundColor, theme }) =>
		theme.colors[backgroundColor] || backgroundColor};
	color: ${({ theme }) => theme.colors.white};
	flex-shrink: 0;

	span {
		${({ theme }) => theme.mixins.text14};

		position: relative;
		z-index: 2;
		display: block;
		margin-bottom: 0.5rem;
	}
	p {
		${({ theme }) => theme.mixins.text28};

		position: relative;
		z-index: 2;
		font-weight: 700;
	}
	img {
		position: absolute;
		z-index: 1;
		bottom: 0;
		right: 0;
	}
`;
