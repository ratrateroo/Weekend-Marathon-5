import React from 'react';

import CreateBlogPost from '../components/CreateBlogPost';
import MainBody from '../../shared/components/UIElements/MainBody';

const CreateBlog = (props) => {
	const BLOGS = [
		{
			id: 'b1',
			image: 'https://source.unsplash.com/1600x900/?beach',
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b2',
			image: 'https://source.unsplash.com/1600x900/?mountain',
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b3',
			image: 'https://source.unsplash.com/1600x900/?city',
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b4',
			image: 'https://source.unsplash.com/1600x900/?space',
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b5',
			image: 'https://source.unsplash.com/1600x900/?beach',
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b6',
			image: 'https://source.unsplash.com/1600x900/?mountain',
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b7',
			image: 'https://source.unsplash.com/1600x900/?city',
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b8',
			image: 'https://source.unsplash.com/1600x900/?space',
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},

		{
			id: 'b9',
			image: 'https://source.unsplash.com/1600x900/?beach',
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b10',
			image: 'https://source.unsplash.com/1600x900/?mountain',
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b11',
			image: 'https://source.unsplash.com/1600x900/?city',
			title: 'The Throne of the Sphinx',
			author: 'Aurora Barnuts',
		},
		{
			id: 'b12',
			image: 'https://source.unsplash.com/1600x900/?space',
			title: 'Wizard of Oz',
			author: 'Aurora Barnuts',
		},
	];
	return (
		<MainBody title={props.title}>
			<CreateBlogPost />
		</MainBody>
	);
};

export default CreateBlog;
