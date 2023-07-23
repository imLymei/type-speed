'use client';

import { useState } from 'react';
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

	const [letters, setLetters] = useState<string[]>(newGenerate(20));

	const typeControl: TypeControl = {
		letters: letters,
		setLetters: (number?: number) => {
			setLetters(newGenerate(20));
			setTypedLetters([]);
		},
		typedLetters: typedLetters,
	};

	return <TypeContext.Provider value={typeControl}>{children}</TypeContext.Provider>;
}
