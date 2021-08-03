import React from 'react';

import './UserProfileInfo.css';
import dummy_image from '../../Images/user_dummy.png';
import Button from '../../shared/components/FormElements/Button';
const UserProfileInfo = (props) => {
	return (
		<div className="c-user-profile">
			<div className="c-user-profile__image">
				{/* <img
					className="c-user-profile__image-pic"
					src={props.image}
					alt={props.name}
				/> */}

				<img
					className="c-user-profile__image-pic"
					src={dummy_image}
					alt={props.username}
				/>
			</div>

			<div className="c-user-profile__info">
				<h2 className="c-user-profile__info__fullname">
					{props.firstname.concat(
						' ',
						props.middlename,
						' ',
						props.lastname
					)}
				</h2>
				<ul className="c-user-profile__info__detail-list">
					<li className="c-user-profile__info__detail-item">
						Blogs: {props.createdBlogs.length}
					</li>
					<li className="c-user-profile__info__detail-item">
						Friends: {props.friends}
					</li>
				</ul>
				<Button>Update Profile</Button>
			</div>
		</div>
	);
};

export default UserProfileInfo;
