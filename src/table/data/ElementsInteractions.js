import Elements from './Elements.js';

export const keyForMap = (elem1, elem2) => {
	if (elem1 && elem2 && elem1 !== elem2) {
		let num1 = Elements[elem1].num;
		let num2 = Elements[elem2].num;
		if (num1 > num2) {
			const a = num1;
			num1 = num2;
			num2 = a;
		}
		return num1 * 1000 + num2;
	}
	return 0;
};

export const keyInteractionsMap = new Map();
export const elementInteractionsMap = new Map();

const setInteracitonInfo = (elem1, elem2, value) => {
	const key = keyForMap(elem1, elem2);
	if (keyInteractionsMap.get(key)) {
		throw new Error('Попытка повторно добавить информацию для элементов "' + elem1 + '" и "' + elem2 + '".');
	}
	keyInteractionsMap.set(key, value);
	const set1 = elementInteractionsMap.get(elem1) || new Set();
	set1.add(elem2);
	elementInteractionsMap.set(elem1, set1);
	const set2 = elementInteractionsMap.get(elem2) || new Set();
	set2.add(elem1);
	elementInteractionsMap.set(elem2, set2);
};

setInteracitonInfo('H', 'O', 'Кислород и водород - куча реакций');
setInteracitonInfo('H', 'Cl', 'водород и хлор - соляная кислота');
