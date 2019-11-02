import React from 'react';
import './Table.css';

function Table() {
	return (
		<div className="mainDiv">
			<table className="tableMain">
				<thead>
					<tr>
						<th>
							<div className="header">Периоды</div>
						</th>
						<th>
							<div className="header">Ряды</div>
						</th>
						<th>
							<div className="header">I</div>
						</th>
						<th>
							<div className="header">II</div>
						</th>
						<th>
							<div className="header">III</div>
						</th>
						<th>
							<div className="header">IV</div>
						</th>
						<th>
							<div className="header">V</div>
						</th>
						<th>
							<div className="header">VI</div>
						</th>
						<th>
							<div className="header">VII</div>
						</th>
						<th>
							<div className="header">VIII</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>I</td>
						<td>1</td>
						<td>Водород</td>
						<td />
						<td />
						<td />
						<td />
						<td />
						<td />
						<td />
						<td />
					</tr>
				</tbody>
			</table>{' '}
		</div>
	);
}

export default Table;
