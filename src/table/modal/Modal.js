import React from 'react';

import CancelIcon from './CancelIcon';

import './Modal.css';

function Modal(props) {
	const { text, closeModal } = props;
	console.log('Modal props = ', props);
	return (
		<div onClick={closeModal}>
			<div className="popup__full_screen_div_opacity" />
			<div className="popup__full_screen_div">
				<div className="popup__window">
					<div className="popup__cancel">
						<CancelIcon
							fill={'black'}
							height={16}
							onClick={closeModal}
							width={16}
						/>
					</div>
					<div className="popup__title">
						Взаимодействие элементов:
					</div>
					<div className="popup__list">{text}</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
