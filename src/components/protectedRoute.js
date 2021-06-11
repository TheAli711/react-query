import { Redirect, Route } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

export const ProtectedRoute = ({ component: Component }, ...rest) => {
    const isLoggedIn = useSelector((state) => state.authentication.value)
    return (
        <Route {...rest} render={
            (props) => {
                if (isLoggedIn) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={{ pathname: "/" }} />
                }
            }
        } />
    )
}