import Login from "../auth/Login";
import InboxIcon from "@material-ui/icons/InboxOutlined";
import MoveToInboxIcon from "@material-ui/icons/MoveToInboxOutlined";
import UnarchiveIcon from "@material-ui/icons/Unarchive";
import BulbIcon from "@material-ui/icons/WbIncandescentOutlined";
import CardMembershipIcon from "@material-ui/icons/CardMembershipOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircleOutlined";
import GroupIcon from "@material-ui/icons/GroupOutlined";
import ReleaseRequests from "../releaseRequests/ReleaseRequests";
import AddReleaseRequest from "../releaseRequests/AddReleaseRequest";
import ResourceRequests from "../resourceRequests/ResourceRequests";
import AddResourceRequest from "../resourceRequests/AddResourceRequest";
/**
 * Links for routing and navigation
 * @type {{ id: string, path?: String, component?: React.Component, inDrawer: boolean, title: String, children?: Object[], parent?: boolean, roles: ['tpd' | 'manager' | 'employee'], icon?: any }[]}
 */
const links = [
    {
        id: "profile",
        path: "/profile",
        inDrawer: true,
        title: "My Profile",
        role: ["manager", "tpd", "employee"],
        icon: AccountCircleIcon,
    },
    {
        id: "talent-requests",
        inDrawer: true,
        title: "Talent Requests",
        roles: ["manager", "tpd"],
        icon: InboxIcon,
        children: [
            {
                id: "release-requests",
                path: "/requests/release",
                inDrawer: true,
                title: "Release Requests",
                parent: "talent-requests",
                roles: ["manager", "tpd"],
                icon: UnarchiveIcon,
                component: ReleaseRequests,
            },
            {
                id: "resource-requests",
                path: "/requests/resource",
                inDrawer: true,
                title: "Resource Requests",
                parent: "talent-requests",
                roles: ["manager", "tpd"],
                icon: MoveToInboxIcon,
                component: ResourceRequests,
            },
        ],
    },
    {
        id: "add-release-request",
        path: "/requests/release/add",
        inDrawer: false,
        title: "Add Release Request",
        roles: ["tpd", "manager"],
        component: AddReleaseRequest,
    },
    {
        id: "edit-release-request",
        path: "/requests/release/:id/edit",
        inDrawer: false,
        title: "Edit Release Request",
        roles: ["manager", "tpd"],
    },
    {
        id: "add-resource-request",
        path: "/requests/resource/add",
        inDrawer: false,
        title: "Add Resource Request",
        roles: ["manager", "tpd"],
        component: AddResourceRequest,
    },
    {
        id: "edit-resource-request",
        path: "/requests/resource/:id/edit",
        inDrawer: false,
        title: "Edit Resource Request",
        roles: ["manager", "tpd"],
    },
    {
        id: "skills-and-certifications",
        inDrawer: true,
        title: "Skills and Certifications",
        roles: ["manager", "tpd", "employee"],
        icon: CardMembershipIcon,
        children: [
            {
                id: "skills",
                inDrawer: true,
                title: "Skills",
                roles: ["manager", "tpd", "employee"],
                icon: BulbIcon,
                children: [
                    {
                        id: "my-skills",
                        path: "/my/skills",
                        inDrawer: true,
                        title: "My Skills",
                        icon: BulbIcon,
                        roles: ["manager", "tpd", "employee"],
                    },
                    {
                        id: "skills-list",
                        path: "/skills/all",
                        inDrawer: true,
                        title: "Skills List",
                        icon: BulbIcon,
                        roles: ["tpd"],
                    },
                    {
                        id: "skills-history",
                        path: "/skills/history",
                        inDrawer: true,
                        title: "Skills History",
                        icon: BulbIcon,
                        roles: ["tpd"],
                    },
                ],
            },
            {
                id: "certifications",
                inDrawer: true,
                title: "Certifications",
                roles: ["manager", "tpd", "employee"],
                icon: CardMembershipIcon,
                children: [
                    {
                        id: "my-certifications",
                        path: "/my/certifications",
                        inDrawer: true,
                        title: "My Certifications",
                        icon: CardMembershipIcon,
                        roles: ["manager", "tpd", "employee"],
                    },
                    {
                        id: "certifications-list",
                        path: "/certifications/all",
                        inDrawer: true,
                        title: "Certifications List",
                        icon: CardMembershipIcon,
                        roles: ["tpd"],
                    },
                    {
                        id: "certifications-privders",
                        path: "/certifications/providers",
                        inDrawer: true,
                        title: "Certifications Providers",
                        icon: CardMembershipIcon,
                        roles: ["tpd"],
                    },
                    {
                        id: "certifications-history",
                        path: "/certifications/history",
                        inDrawer: true,
                        title: "Certifications History",
                        icon: CardMembershipIcon,
                        roles: ["tpd"],
                    },
                ],
            },
            {
                id: "trainings",
                inDrawer: true,
                title: "Trainings",
                parent: "skills-and-certifications",
                roles: ["manager", "tpd", "employee"],
                icon: CardMembershipIcon,
                children: [
                    {
                        id: "my-trainings",
                        path: "/my/trainings",
                        inDrawer: true,
                        title: "My Trainings",
                        icon: CardMembershipIcon,
                        roles: ["manager", "tpd", "employee"],
                    },
                    {
                        id: "all-trainings",
                        path: "/trainings/all",
                        inDrawer: true,
                        title: "Employee Trainings",
                        icon: CardMembershipIcon,
                        roles: ["tpd"],
                    },
                ],
            },
        ],
    },
    {
        id: "employees",
        path: "/employees",
        inDrawer: true,
        title: "Employees",
        role: ["tpd"],
        icon: GroupIcon,
    },
    {
        id: "edit-employee",
        path: "/employees/:id/edit",
        inDrawer: false,
        title: "Employees",
        role: ["tpd"],
    },
    {
        id: "login",
        path: "/login",
        component: Login,
        inDrawer: false,
        title: "Login",
        roles: ["manager", "tpd", "employee"],
    },
];

export default links;
