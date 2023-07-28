'use client';

import { useState, useEffect } from 'react';
import { TypeContext } from '@/utils/contexts';
import useKeyboard from '@/hooks/useKeyboard';
import { generate } from 'random-words';

export default function TypeProvider({ children }: { children: React.ReactNode }) {
	const [typedLetters, setTypedLetters] = useKeyboard();

	function newGenerate(number: number) {
		const data = generate(number).map((letters) => letters.split(''));

		const newData = data.reduce((prev, val, index) => {
			if (index !== number - 1) return [...prev, ...val, ' '];
			return [...prev, ...val];
		}, []);

		return [...newData];
	}

	function clearTypedLetters() {
		setTypedLetters([]);
	}

	const [letters, setLetters] = useState<string[]>(newGenerate(20));

	const [correct, setCorrect] = useState(0);
	const [accuracy, setAccuracy] = useState(0);

	useEffect(() => {
		const total = letters.reduce((total, actualLetter, index) => {
			if (actualLetter === typedLetters[index]) return total + 1;
			return total;
		}, 0);

		setCorrect(total);

		setAccuracy(total != 0 ? Math.floor((total / typedLetters.length) * 10000) / 100 : 100);
	}, [typedLetters, letters]);

	const typeControl: TypeControl = {
		letters: letters,
		setLetters: (number?: number) => {
			setLetters(newGenerate(number ?? 20));
			clearTypedLetters();
		},
		typedLetters: typedLetters,
		typedCorrect: correct,
		accuracy: accuracy,
		clearTypedLetters: clearTypedLetters,
	};

	return <TypeContext.Provider value={typeControl}>{children}</TypeContext.Provider>;
}
