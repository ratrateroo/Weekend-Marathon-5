import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './UserNavLinks.css';

const NavLinks = (props) => {
	const auth = useContext(AuthContext);

	return (
		<ul className="c-user-navigation__items">
			{!auth.isLoggedIn && (
				<React.Fragment>
					<li className="c-user-navigation__item">
						{/* <a href="../Signup/Signup.html" className="c-user-navigation__link">
               Signup
            </a> */}
						<NavLink
							to="/signup"
							className="c-user-navigation__link"
							exact>
							Signup
						</NavLink>
					</li>
					<li className="c-user-navigation__item">
						{/* <a href="../Login/Login.html" className="c-user-navigation__link">
               Login
            </a> */}
						<NavLink
							to="/login"
							className="c-user-navigation__link"
							exact>
							Login
						</NavLink>
					</li>
				</React.Fragment>
			)}
			{auth.isLoggedIn && (
				<li className="c--navigation__item">
					{/* <a href="../Blogs/Blogs.html" className="c-user-navigation__link">
               Logout
            </a> */}
					<button
						className="c-user-navigation__link"
						onClick={auth.logout}>
						Logout
					</button>
				</li>
			)}
		</ul>
	);
};

export default NavLinks;
