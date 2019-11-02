import React from 'react';

import Cell from './Cell';
import './Table.css';

const arr6 = [ 1, 2, 3, 4, 5, 6 ];

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
						<th colSpan="4">
							<div className="header4">VIII</div>
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<div className="rowPeriods">I</div>
						</td>
						<td>
							<div className="rowPeriods">1</div>
						</td>
						<td>
							<Cell key="H" elem="H" />
						</td>
						{arr6.map((item) => (
							<td key={item}>
								<div className="cellWidth" />
							</td>
						))}
						<td colSpan="3">
							<div className="cellWidth3" />
						</td>
						<td>
							<Cell key="He" elem="He" />
						</td>
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">II</div>
						</td>
						<td>
							<div className="rowPeriods">2</div>
						</td>
						{[ 'Li', 'Be', 'B', 'C', 'N', 'O', 'F' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td colSpan="3">
							<div className="cellWidth3" />
						</td>
						<td>
							<Cell key="Ne" elem="Ne" />
						</td>
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">III</div>
						</td>
						<td>
							<div className="rowPeriods">3</div>
						</td>
						{[ 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td colSpan="3">
							<div className="cellWidth3" />
						</td>
						<td>
							<Cell key="Ar" elem="Ar" />
						</td>
					</tr>
					<tr>
						<td rowSpan="2">
							<div className="rowPeriods">IV</div>
						</td>
						<td>
							<div className="rowPeriods">4</div>
						</td>
						{[ 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td>
							<div className="cellWidth" />
						</td>
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">5</div>
						</td>
						{[ 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td colSpan="3">
							<div className="cellWidth3" />
						</td>
						<td>
							<Cell key="Kr" elem="Kr" />
						</td>
					</tr>
					<tr>
						<td rowSpan="2">
							<div className="rowPeriods">V</div>
						</td>
						<td>
							<div className="rowPeriods">6</div>
						</td>
						{[ 'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td>
							<div className="cellWidth" />
						</td>
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">7</div>
						</td>
						{[ 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td colSpan="3">
							<div className="cellWidth3" />
						</td>
						<td>
							<Cell key="Xe" elem="Xe" />
						</td>
					</tr>
					<tr>
						<td rowSpan="2">
							<div className="rowPeriods">VI</div>
						</td>
						<td>
							<div className="rowPeriods">8</div>
						</td>
						{[ 'Cs', 'Ba', 'La*', 'Hf', 'Ta', 'W', 'Re', 'Os', 'Ir', 'Pt' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td>
							<div className="cellWidth" />
						</td>
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">9</div>
						</td>
						{[ 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td colSpan="3">
							<div className="cellWidth3" />
						</td>
						<td>
							<Cell key="Rn" elem="Rn" />
						</td>
					</tr>
					<tr>
						<td rowSpan="2">
							<div className="rowPeriods">VII</div>
						</td>
						<td>
							<div className="rowPeriods">10</div>
						</td>
						{[ 'Fr', 'Ra', 'Ac**', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds' ].map((item) => (
							<td key={item}>
								<Cell key={item} elem={item} />
							</td>
						))}
						<td>
							<div className="cellWidth" />
						</td>
					</tr>
					<tr>
						<td>
							<div className="rowPeriods">11</div>
						</td>
						<td>
							<Cell key="Rg" elem="Rg" />
						</td>
						{arr6.map((item) => (
							<td key={item}>
								<div className="cellWidth" />
							</td>
						))}
						<td colSpan="4">
							<div className="cellWidth4" />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
