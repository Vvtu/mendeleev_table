import React from 'react';
import './Table.css';

import Elements from './data/Elements';

function Cell(props) {
	const {
		elem,
		setDragedElemKey,
		handleOnDrop,
		activeElementsSet,
	} = props;
	const elemInfo = Elements[elem] || {};
	let color = elemInfo.color ? ' bColor' + elemInfo.color : undefined;
	const opacity = activeElementsSet
		? activeElementsSet.has(elem) ? '' : ' opacity'
		: '';
	color += opacity;

	return (
		<div
			className={color}
			draggable
			onDragStart={() => {
				handleOnDrop('');
				setDragedElemKey(elem);
			}}
			onDragOver={(e) => {
				e.preventDefault();
			}}
			onDrop={(e) => {
				e.preventDefault();
				handleOnDrop(elem);
			}}
		>
			{elemInfo.color === 'Green' ? (
				<div className="cellWidth">
					<div className="cellKeyAndNum">
						<div className="cellKey">{elem}</div>
						<div>{elemInfo.num}</div>
					</div>
					<div className="cellFlexEnd">
						<div>{elemInfo.name}</div>
					</div>
					<div className="cellFlexStart">
						<div>{elemInfo.weight}</div>
					</div>
				</div>
			) : (
				<div className="cellWidth">
					<div className="cellKeyAndNum">
						<div>{elemInfo.num}</div>
						<div className="cellKey">{elem}</div>
					</div>
					<div className="cellFlexStart">
						<div>{elemInfo.name}</div>
					</div>
					<div className="cellFlexEnd">
						<div>{elemInfo.weight}</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Cell;
