import React from 'react';

import MainBody from '../../shared/components/UIElements/MainBody';
import UpdateBlogPost from '../components/UpdateBlogPost';

const UpdateBlog = (props) => {
	return (
		<MainBody title={props.title}>
			<UpdateBlogPost />
		</MainBody>
	);
};

export default UpdateBlog;
