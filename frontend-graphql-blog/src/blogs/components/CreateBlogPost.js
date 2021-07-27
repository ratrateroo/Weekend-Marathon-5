import React from 'react';

import './CreateBlogPost.css';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
	VALIDATOR_REQUIRE,
	VALIDATOR_MINLENGTH,
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';

const CreateBlogPost = (props) => {
	const [formState, inputHandler] = useForm(
		{
			title: {
				value: '',
				isValid: true,
			},
			content: {
				value: '',
				isValid: true,
			},
		},
		false
	);

	const createBlogHandler = (event) => {
		event.preventDefault();
		console.log(formState.inputs);
	};

	return (
		<div className="c-form-blog">
			<form onSubmit={createBlogHandler} className="c-form-blog__body">
				<Input
					id="title"
					element="input"
					type="text"
					label="Title"
					validators={[VALIDATOR_REQUIRE()]}
					errorText="Please enter a valid title."
					onInput={inputHandler}
				/>

				<Input
					id="content"
					element="textarea"
					label="Content"
					validators={[VALIDATOR_MINLENGTH(5)]}
					errorText="Please enter a valid content with a minimum of 5 characters"
					onInput={inputHandler}
				/>
				<div className="c-form-blog__button">
					<div className="c-form-blog__button-holder">
						<Button submit disabled={!formState.isValid}>
							Save
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CreateBlogPost;
