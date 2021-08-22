import React from 'react';

import Button from '../FormElements/Button';

import './FormModal.css';

const modal = (props) => (
	<div className={`c-modal`} style={props.style}>
		<header className={`c-modal__header`}>
			<h2 className={`c-modal__title`}>{props.title}</h2>
		</header>
		<div>
			<div className={`c-modal__content-`}>{props.children}</div>
			<footer className={`c-modal__footer`}>
				{props.canCancel && (
					<Button cancel onClick={props.onCancel}>
						Cancel
					</Button>
				)}

				{props.canConfirm && (
					<Button submit onClick={props.onConfirm}>
						Ok
					</Button>
				)}
			</footer>
		</div>
	</div>
);

export default modal;
