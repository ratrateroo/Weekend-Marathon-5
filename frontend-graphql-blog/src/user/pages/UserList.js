import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';

import UsersList from '../components/UsersList';

const items = [1, 2, 3];

const UserList = (props) => {
	return (
		<MainBody title={props.title}>
			<UsersList items={items} />
		</MainBody>
	);
};

export default UserList;
