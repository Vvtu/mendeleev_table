import React from 'react';
import './Table.css';

import Elements from './Elements';

function Cell(props) {
	const { elem, setDragedElemKey, setDragOverElemKey, onDragEnd, onDrop } = props;
	const elemInfo = Elements[elem] || {};
	const color = elemInfo.color ? ' bColor' + elemInfo.color : undefined;

	return (
		<div
			className={color}
			draggable
			onDragStart={() => setDragedElemKey(elem)}
			onDragEnd={onDragEnd}
			onDragOver={(e) => {
				e.preventDefault();
			}}
			onDrop={(e) => {
				e.preventDefault();
				onDrop(elem);
			}}
		>
			{elemInfo.color === 'Green' ? (
				<div className="cellWidth">
					<div className="cellKeyAndNum">
						<div className="cellKey">{elem}</div>
						<div>{elemInfo.num}</div>
					</div>
					<div
						className="cellFlexEnd"
						onDragEnter={() => setDragOverElemKey(elem)}
						onDragLeave={() => setDragOverElemKey('')}
					>
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
					<div
						className="cellFlexStart"
						onDragEnter={() => setDragOverElemKey(elem)}
						onDragLeave={() => setDragOverElemKey('')}
					>
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
