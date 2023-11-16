import { css } from 'styled-components';

const colors = {
	// Primary
	primary50: '#F9FCFE',
	primary100: '#E6F4FC',
	primary200: '#CDE8FA',
	primary300: '#AEDAF7',
	primary400: '#A2D4F5',
	primary500: '#83C6F2',
	primary600: '#2F9FE9',
	primary700: '#126DA9',
	primary800: '#093654',
	primary900: '#0A1A25',

	// Secondary
	secondary50: '#F2F0F9',
	secondary100: '#D7D3EE',
	secondary200: '#AFA8DE',
	secondary300: '#796EC7',
	secondary400: '#453A97',
	secondary500: '#241E4E',
	secondary600: '#1F1A44',
	secondary700: '#161331',
	secondary800: '#0D0B1D',
	secondary900: '#05040A',

	// Accent
	accent50: '#FEFAF8',
	accent100: '#FAE9E3',
	accent200: '#F4D3C7',
	accent300: '#EDB8A4',
	accent400: '#E8A288',
	accent500: '#E49273',
	accent600: '#DD764F',
	accent700: '#B44A23',
	accent800: '#6C2D15',
	accent900: '#240F07',

	// Neutral
	neutral50: '#F7F8F9',
	neutral100: '#E7EAEE',
	neutral200: '#D0D5DD',
	neutral300: '#B8C0CC',
	neutral400: '#A0ABBB',
	neutral500: '#64748B',
	neutral600: '#4B5768',
	neutral700: '#323A46',
	neutral800: '#191D23',
	neutral900: '#0D0F11',

	// Success
	success50: '#ECFDF5',
	success500: '#10B981',

	// Warning
	warning50: '#FFFBEB',
	warning500: '#CE6C47',

	// Error
	error50: '#FEE1E5',
	error500: '#F71735',

	// Shades
	black: '#000000',
	white: '#ffffff',
	grey: '#C7C7C7',
};
const mixins = {
	text10: css`
		font-size: 0.625rem;
		line-height: 120%;
	`,
	text12: css`
		font-size: 0.75rem;
		line-height: 120%;
	`,
	text14: css`
		font-size: 0.875rem;
		line-height: 200%;
	`,
	text16: css`
		font-size: 1rem;
		line-height: 200%;
	`,
	text18: css`
		font-size: 1.125rem;
		line-height: 120%;
	`,
	text19: css`
		font-size: 1.1875rem;
		line-height: 120%;
	`,
	text23: css`
		font-size: 1.4375rem;
		line-height: 120%;
	`,
	text28: css`
		font-size: 1.75rem;
		line-height: 120%;
	`,
	text33: css`
		font-size: 2.0625rem;
		line-height: 120%;
	`,
	text40: css`
		font-size: 2.5rem;
		line-height: 120%;
	`,
	text48: css`
		font-size: 3rem;
		line-height: 120%;
	`,
	text60: css`
		font-size: 3.75rem;
		line-height: 120%;
	`,
	text72: css`
		font-size: 4.5rem;
		line-height: 120%;
	`,
};
const fonts = {
	nunitoSans: css`
		font-family: 'Nunito Sans', sans-serif;
	`,
	crimsonPro: css`
		font-family: 'Crimson Pro', serif;
	`,
	inter: css`
		font-family: 'Inter', serif;
	`,
};

export const BREAKPOINTS = {
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
};

const theme = {
	colors,
	mixins,
	fonts,
};
export default theme;
