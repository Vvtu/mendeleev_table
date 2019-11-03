import React from 'react';

import CancelIcon from './CancelIcon';

import './Modal.css';

function Modal(props) {
	const { setDragedElemKey } = props;
	console.log('Modal props = ', props);
	return (
		<div>
			<div className="popup__full_screen_div_opacity" />
			<div className="popup__full_screen_div">
				<div className="popup__window">
					<div className="popup__cancel">
						<CancelIcon fill={'#FFFFFF'} height={16} onClick={(e) => {}} width={16} />
					</div>
					<div className="popup__list">
						sdfsdfsfsd
						{setDragedElemKey}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
