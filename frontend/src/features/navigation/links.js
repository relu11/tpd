import Login from '../auth/Login';
/**
 * Links for routing and navigation
 * @type {{ id: string, path?: String, component?: React.Component, inDrawer: boolean, title: String, isParent?: boolean, parent?: boolean, roles: ['tpd' | 'manager' | 'employee'] }[]}
 */
const links = [
    { id: 'login', path: '/login', component: Login, inDrawer: false, title: 'Login', roles: ['manager', 'tpd', 'employee'] },
    { id: 'talent-requests', isParent: true, inDrawer: true, title: 'Talent Requests', roles: ['manager', 'tpd'] },
    { id: 'release-requests', path: '/requests/release', inDrawer: true, title: 'Release Requests', parent: 'talent-requests', roles: ['manager', 'tpd'] },
    { id: 'add-release-request', path: '/requests/release/add', inDrawer: false, title: 'Add Release Request', roles: ['tpd', 'manager'] },
    { id: 'edit-release-request', path: '/requests/release/:id/edit', inDrawer: false, title: 'Edit Release Request', roles: ['manager', 'tpd'] },
    { id: 'resource-requests', path: '/requests/resource', inDrawer: true, title: 'Resource Requests', parent: 'talent-requests', roles: ['manager', 'tpd'] },
    { id: 'add-resource-request', path: '/requests/resource/add', inDrawer: false, title: 'Add Resource Request', roles: ['manager', 'tpd'] },
    { id: 'edit-resource-request', path: '/requests/resource/:id/edit', inDrawer: false, title: 'Edit Resource Request', roles: ['manager', 'tpd'] },
    { id: 'skills-and-certifications', isParent: true, inDrawer: true, title: 'Skills and Certifications', roles: ['manager', 'tpd', 'employee'] },
    { id: 'skills', isParent: true, inDrawer: true, title: 'Skills', parent: 'skills-and-certifications', roles: ['manager', 'tpd', 'employee'] },
    { id: 'my-skills', path: '/my/skills', inDrawer: true, title: 'My Skills', parent: 'skills', roles: ['manager', 'tpd', 'employee'] },
    { id: 'skills-list', path: '/skills/all', inDrawer: true, title: 'Skills List', parent: 'skills', roles: ['tpd'] },
    { id: 'skills-history', path: '/skills/history', inDrawer: true, title: 'Skills History', parent: 'skills', roles: ['tpd'] },
    { id: 'certifications', isParent: true, inDrawer: true, title: 'Certifications', parent: 'skills-and-certifications', roles: ['manager', 'tpd', 'employee'] },
    { id: 'my-certifications', path: '/my/certifications', inDrawer: true, title: 'My Certifications', parent: 'certifications', roles: ['manager', 'tpd', 'employee'] },
    { id: 'certifications-list', path: '/certifications/all', inDrawer: true, title: 'Certifications List', parent: 'certifications', roles: ['tpd'] },
    { id: 'certifications-privders', path: '/certifications/providers', inDrawer: true, title: 'Certifications Providers', parent: 'certifications', roles: ['tpd'] },
    { id: 'certifications-history', path: '/certifications/history', inDrawer: true, title: 'Certifications History', parent: 'certifications', roles: ['tpd'] },
    { id: 'trainings', isParent: true, inDrawer: true, title: 'Trainings', parent: 'skills-and-certifications', roles: ['manager', 'tpd', 'employee'] },
    { id: 'my-trainings', path: '/my/trainings', inDrawer: true, title: 'My Trainings', parent: 'trainings', roles: ['manager', 'tpd', 'employee'] },
    { id: 'all-trainings', path: '/trainings/all', inDrawer: true, title: 'Employee Trainings', parent: 'trainings', roles: ['tpd'] },
    { id: 'profile', path: '/profile', inDrawer: true, title: 'My Profile', role: ['manager', 'tpd', 'employee'] },
    { id: 'employees', path: '/employees', inDrawer: true, title: 'Employees', role: ['tpd'] },
    { id: 'employees/:id/edit', path: '/employees', inDrawer: true, title: 'Employees', role: ['tpd'] },
]

export default links;
