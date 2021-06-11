import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import Home from './Home';
import Login from './Login';

const routes = [
    {
        pathname: "/",
        exact: true,
        component: Home,
        protected: false

    },
    {
        pathname: "/AdminDashboard",
        exact: true,
        component: AdminDashboard,
        protected: true
    },
    {
        pathname: "/UserDashboard",
        exact: true,
        component: UserDashboard,
        protected: true
    },
    {
        pathname: "/Login",
        exact: true,
        component: Login,
        protected: false
    }
];

export default routes;