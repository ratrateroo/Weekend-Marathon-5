import React from 'react';

import Button from '../FormElements/Button';

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
				<h2 className={`c-modal__title`}>{props.title}</h2>
			</header>
			<div>
				<div className={`c-modal__content-`}>{props.children}</div>
				<footer className={`c-modal__footer`}>
					{
						<>
							<Button cancel onClick={props.onCancel}>
								Cancel
							</Button>
							<Button submit onClick={props.onConfirm}>
								Ok
							</Button>
						</>
					}
				</footer>
			</div>
		</div>
	</div>
);

export default modal;
