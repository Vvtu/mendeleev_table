import React from 'react';
import './Table.css';

import Elements from './Elements';

function Cell(props) {
	const elemInfo = Elements[props.elem] || {};
	const color = elemInfo.color ? ' bColor' + elemInfo.color : undefined;
	if (elemInfo.color === 'Green') {
		return (
			<div className={color}>
				<div className="cellWidth">
					<div className="cellKeyAndNum">
						<div className="cellKey">{props.elem}</div>
						<div>{elemInfo.num}</div>
					</div>
					<div className="cellFlexEnd">
						<div>{elemInfo.name}</div>
					</div>
					<div className="cellFlexStart">
						<div>{elemInfo.weight}</div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className={color}>
			<div className="cellWidth">
				<div className="cellKeyAndNum">
					<div>{elemInfo.num}</div>
					<div className="cellKey">{props.elem}</div>
				</div>
				<div className="cellFlexStart">
					<div>{elemInfo.name}</div>
				</div>
				<div className="cellFlexEnd">
					<div>{elemInfo.weight}</div>
				</div>
			</div>
		</div>
	);
}

export default Cell;
