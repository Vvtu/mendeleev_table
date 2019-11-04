import React, { Fragment } from 'react';

import Cell from '../Cell';
import './Modal.css';

const noop = () => {};

function Modal(props) {
	const {
		dragedElemKey,
		dropElemKey,
		keyInteractionsMap,
		keyForMap,
		closeModal,
	} = props;
	console.log('Modal props = ', props);

	return (
		<div onClick={closeModal}>
			<div className="popup__full_screen_div_opacity" />
			<div className="popup__full_screen_div">
				<div className="popup__window">
					{dragedElemKey === '*' ? (
						<div className="popup__title">
							Переместите один элемент на другой
						</div>
					) : (
						<Fragment>
							<div className="popup__title">Информация:</div>
							<table className="cellWidth">
								<thead>
									<tr>
										<th>
											<Cell
												activeElementsSet={undefined}
												setDragedElemKey={noop}
												handleOnDrop={noop}
												elem={dragedElemKey}
											/>
										</th>
									</tr>
								</thead>
							</table>
							<table className="cellWidth">
								<thead>
									<tr>
										<th>
											<Cell
												activeElementsSet={undefined}
												setDragedElemKey={noop}
												handleOnDrop={noop}
												elem={dropElemKey}
											/>
										</th>
									</tr>
								</thead>
							</table>
							<div className="popup__list">
								{keyInteractionsMap.get(
									keyForMap(dragedElemKey, dropElemKey),
								)}
							</div>
						</Fragment>
					)}
					<div className="modalButton">
						<button>Закрыть</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
