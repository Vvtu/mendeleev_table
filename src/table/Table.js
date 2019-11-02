import React from 'react';
import './Table.css';

const arr = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

function Table() {
	return (
		<div className="mainDiv">
			<table className="tableMain">
				<thead>
					<tr>
						<th>
							<div className="header0">Периоды</div>
						</th>
						<th>
							<div className="header1">Ряды</div>
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
						<td>
							<div className="rowPeriods">I</div>
						</td>
						<td>1</td>
						{arr.map((item) => <td>{item}</td>)}
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">II</div>
						</td>
						<td>1</td>
						{arr.map((item) => <td>{item}</td>)}
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">III</div>
						</td>
						<td>1</td>
						{arr.map((item) => <td>{item}</td>)}
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">IV</div>
						</td>
						<td>1</td>
						{arr.map((item) => <td>{item}</td>)}
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">V</div>
						</td>
						<td>1</td>
						{arr.map((item) => <td>{item}</td>)}
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">VI</div>
						</td>
						<td>1</td>
						{arr.map((item) => <td>{item}</td>)}
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">VII</div>
						</td>
						<td>1</td>
						{arr.map((item) => <td>{item}</td>)}
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
