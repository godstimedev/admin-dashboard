import { useState } from 'react';
import { Department } from '../../../components';
import { Container } from './styles';
import { allPermissions } from '../../../constants';
import { allDepartments } from '../../../constants';

const Departments = () => {
	const [permissions, setPermissions] = useState({
		programs: [allPermissions.event, allPermissions.student],
		operations: [allPermissions.revenue, allPermissions.student],
		marketing: [allPermissions.event],
		sales: [allPermissions.curriculum],
	});

	return (
		<Container>
			<Department
				title={allDepartments.programs}
				permissionKey="programs"
				departmentPermissions={permissions?.programs}
				setPermissions={setPermissions}
			/>
			<Department
				title={allDepartments.operations}
				permissionKey="operations"
				departmentPermissions={permissions?.operations}
				setPermissions={setPermissions}
			/>
			<Department
				title={allDepartments.marketing}
				permissionKey="marketing"
				departmentPermissions={permissions?.marketing}
				setPermissions={setPermissions}
			/>
			<Department
				title={allDepartments.sales}
				permissionKey="sales"
				departmentPermissions={permissions?.sales}
				setPermissions={setPermissions}
			/>
		</Container>
	);
};

export default Departments;
