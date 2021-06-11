import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authenticationSlice';

function Nav() {

    const isLoggedIn = useSelector((state) => state.authentication.value)
    const dispatch = useDispatch()

    return (
        <nav>
            <div>
                <ul>
                    <Link to="/" >
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to="/AdminDashboard" >
                        <li>
                            AdminDashboard
                        </li>
                    </Link>
                    <Link to="/UserDashboard" >
                        <li>
                            UserDashboard
                        </li>
                    </Link>
                    {!isLoggedIn ?
                        <Link to="/Login" >
                            <li>
                                Login
                            </li>
                        </Link>
                        :
                        <button onClick={() => dispatch(logout())}>Logout</button>
                    }
                </ul>
            </div>

        </nav>
    )
}

export default Nav
