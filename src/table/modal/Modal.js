import React, { Fragment } from 'react';

import Cell from '../Cell';
import './Modal.css';

const NO_INFORMATION = () => <div>Нет информации о веществах из этих элементах</div>;

const cellProps = {
	activeElementsSet: undefined,
	setDragedElemKey: () => { },
	handleOnDrop: () => { },
};

function Modal(props) {
	const {
		dragedElemKey,
		dropElemKey,
		keyInteractionsMap,
		keyForMap,
		closeModal,
	} = props;
	console.log('Modal props = ', props);

	const Message = keyInteractionsMap.get(
		keyForMap(dragedElemKey, dropElemKey)) || NO_INFORMATION;

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

								<div className="modalElementsDiv">
									<div className="modalElements">
										<table className="cellWidth">
											<thead>
												<tr>
													<th>
														<Cell
															cellProps={cellProps}
															elem={dragedElemKey}
														/>
													</th>
												</tr>
											</thead>
										</table>
										<div>и</div>
										<table className="cellWidth">
											<thead>
												<tr>
													<th>
														<Cell
															cellProps={cellProps}
															elem={dropElemKey}
														/>
													</th>
												</tr>
											</thead>
										</table>
									</div>
								</div>
								<div className="popup__list">
									<Message />
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
