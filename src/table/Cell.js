import React from 'react';
import './Table.css';

import Elements from './Elements';

function Cell(props) {
	const elemInfo = Elements[props.elem];
	const color = elemInfo ? ' bColor' + elemInfo.color : undefined;

	return (
		<div className={color}>
			<div className="cellWidth">{props.elem}</div>
		</div>
	);
}

export default Cell;
