import React from 'react';

import './SimpleModal.css';

const modal = (props) => (
	<div className="modal">
		<header className="modal__header">
			<h1>{props.title}</h1>
		</header>
		<section className="modal__content">{props.children}</section>
		<section className="modal__actions">
			{props.canCancel && (
				<button className="btn" onClick={props.onCancel}>
					Cancel
				</button>
			)}
			{props.canConfirm && (
				<button className="btn" onClick={props.onConfirm}>
					{props.confirmText}
				</button>
			)}
		</section>

		<div className={`c-modal`} style={props.style}>
			<header className={`c-modal__header`}>
				<h2 className={`c-modal__title`}>{props.header}</h2>
			</header>
			<div>
				<div className={`c-modal__content-`}>{props.children}</div>
				<footer className={`c-modal__footer`}>{props.footer}</footer>
			</div>
		</div>
	</div>
);

export default modal;
