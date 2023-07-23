import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export default function useKeyboard(): [string[], Dispatch<SetStateAction<string[]>>] {
	const [typedLetters, setTypedLetters] = useState<string[]>([]);

	useEffect(() => {
		function handleType(event: KeyboardEvent) {
			if (event.ctrlKey && event.key === 'Backspace') {
				setTypedLetters((prev) => {
					const newLetters = prev.slice();
					do {
						newLetters.pop();
					} while (newLetters[newLetters.length - 1] !== ' ' && newLetters.length !== 0);
					return newLetters;
				});
				return false;
			}
			setTypedLetters((prev) => {
				if (event.key.length === 1 && !event.ctrlKey && !event.altKey) return [...prev, event.key];
				else {
					if (event.key === 'Backspace') return prev.slice(0, -1);
				}
				return prev;
			});
		}

		window.addEventListener('keydown', handleType);

		return () => window.removeEventListener('keydown', handleType);
	}, []);

	return [typedLetters, setTypedLetters];
}
