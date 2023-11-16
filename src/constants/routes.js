export const Approutes = {
	auth: {
		initial: '/auth',
		login: '/auth/login',
		resetPassword: '/auth/resetPassword',
		checkEmail: '/auth/checkEmail',
		changePassword: '/auth/changePassword',
	},
	dashboard: '/',
	events: '/events',
	playground: '/playground',
	students: {
		initial: '/students',
		active: '/students/active',
		potential: '/students/potential',
	},
	trainers: {
		initial: '/trainers',
		instructor: '/trainers/instructor',
		mentor: '/trainers/mentor',
	},
	transactions: '/transactions',
	adminSettings: {
		initial: '/adminSettings/*',
		profile: 'profile',
		department: 'department',
		users: 'users',
	},
};
