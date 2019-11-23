import React from 'react';

const ElementsInteractions = [
	{
		elem1: 'H',
		elem2: 'O',
		message: () => (
			<div>
				<ul>
					<li>При взаимодействии простых веществ кислорода и водорода образуется вода <b>H<sub>2</sub>O</b>. Реакция происходит при нагревании.</li>
					<li> Смесь двух объемов водорода и одного объёма кислорода взрывоопасна и называется "гремучий газ"</li>
				</ul>
			</div>
		),
	},
	{
		elem1: 'H',
		elem2: 'Cl',
		message: () => <div>Водород и хлор - соляная кислота</div>
	},
	{
		elem1: 'H',
		elem2: 'C',
		message: () => <div>Водород и углерод - метан и куча газов</div>
	},
	{
		elem1: 'H',
		elem2: 'He',
		message: () => <div>Никак не реагируют</div>
	},
];

export default ElementsInteractions;
