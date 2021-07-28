import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './UpdateBlogPost.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const BLOGS = [
	{
		id: 'b1',
		image: 'https://source.unsplash.com/1600x900/?beach',
		title: 'The Throne of the Sphinx',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b2',
		image: 'https://source.unsplash.com/1600x900/?mountain',
		title: 'Wizard of Oz',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b3',
		image: 'https://source.unsplash.com/1600x900/?city',
		title: 'The Throne of the Sphinx',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b4',
		image: 'https://source.unsplash.com/1600x900/?space',
		title: 'Wizard of Oz',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b5',
		image: 'https://source.unsplash.com/1600x900/?beach',
		title: 'The Throne of the Sphinx',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b6',
		image: 'https://source.unsplash.com/1600x900/?mountain',
		title: 'Wizard of Oz',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b7',
		image: 'https://source.unsplash.com/1600x900/?city',
		title: 'The Throne of the Sphinx',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b8',
		image: 'https://source.unsplash.com/1600x900/?space',
		title: 'Wizard of Oz',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},

	{
		id: 'b9',
		image: 'https://source.unsplash.com/1600x900/?beach',
		title: 'The Throne of the Sphinx',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b10',
		image: 'https://source.unsplash.com/1600x900/?mountain',
		title: 'Wizard of Oz',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b11',
		image: 'https://source.unsplash.com/1600x900/?city',
		title: 'The Throne of the Sphinx',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
	{
		id: 'b12',
		image: 'https://source.unsplash.com/1600x900/?space',
		title: 'Wizard of Oz',
		author: 'Aurora Barnuts',
		content: 'Lorem ipsum dolor sit amet consectetur adipisicing',
	},
];

const UpdateBlogPost = (props) => {
	const [isLoading, setIsLoading] = useState(true);

	const blogId = useParams().blogId;

	const [formState, inputHandler, setFormData] = useForm(
		{
			title: {
				value: '',
				isValid: false,
			},
			content: {
				value: '',
				isValid: false,
			},
		},
		false
	);

	const identifiedBlog = BLOGS.find((b) => b.id === blogId);

	if (!identifiedBlog) {
	}

	useEffect(() => {
		if (identifiedBlog) {
			setFormData(
				{
					title: {
						value: identifiedBlog.title,
						isValid: false,
					},
					content: {
						value: identifiedBlog.content,
						isValid: false,
					},
				},
				true
			);
		}
		setIsLoading(false);
	}, [setFormData, identifiedBlog]);

	const updateBlogHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};

	if (!identifiedBlog) {
		return (
			<div>
				<h2>Could not find blog!</h2>
			</div>
		);
	}

	if (isLoading) {
		return (
			<div>
				<h2>Loading...</h2>
			</div>
		);
	}

	return (
		<div className="c-form-blog">
			<form onSubmit={updateBlogHandler} className="c-form-blog__body">
				{/* <div className="c-form-blog-input">
               <label className="c-form-blog-input__label" for="title">
                  Title
               </label>
               <input
                  className="c-form-blog-input__title"
                  type="text"
                  id="title"
                  name="title"
                  required
               />
            </div> */}

				<Input
					id="title"
					element="input"
					type="text"
					label="Title"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid title."
					onInput={inputHandler}
					initialValue={formState.inputs.title.value}
					initialValid={formState.inputs.title.isValid}
				/>

				{/* <div className="c-form-blog-input">
               <label className="c-form-blog-input__label" for="content">
                  Content
               </label>
               <textarea
                  className="c-form-blog-input__content"
                  name="content"
                  id="content"
                  rows="13"
               ></textarea>
            </div> */}

				<Input
					id="content"
					element="textarea"
					label="Content"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid content with a minimum of 5 characters"
					onInput={inputHandler}
					initialValue={formState.inputs.content.value}
					initialValid={formState.inputs.content.isValid}
				/>

				<div className="c-form-blog__button">
					<div className="c-form-blog__button-holder">
						<Button submit disabled={!formState.isValid}>
							Update
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default UpdateBlogPost;
