import React from 'react';

import './UserProfileInfo.css';

const UserProfileInfo = (props) => {
	// if (props.user.length === 0) {
	//    return (
	//       <div>
	//          <h2>User Profile Unavailable!</h2>
	//       </div>
	//    );
	// }

	return (
		<div className="c-user-profile">
			<div className="c-user-profile__image">
				<img
					className="c-user-profile__image-pic"
					src={props.image}
					alt={props.name}
				/>
			</div>

			<div className="c-user-profile__info">
				<h2 className="c-user-profile__info__fullname">{props.name}</h2>
				<ul className="c-user-profile__info__detail-list">
					<li className="c-user-profile__info__detail-item">
						Blogs {props.blogs}
					</li>
					<li className="c-user-profile__info__detail-item">
						Friends {props.friends}
					</li>
				</ul>
			</div>
		</div>
	);
};

export default UserProfileInfo;
