import { useEffect, useState } from 'react';

export default function useKeyboard() {
	const [typedLetters, setTypedLetters] = useState<string[]>([]);

	useEffect(() => {
		function handleType(event: KeyboardEvent) {
			console.log(event);
			setTypedLetters((prev) => {
				if (event.key.length === 1) return [...prev, event.key];
				else {
					if (event.key === 'Backspace') return prev.slice(0, -1);
				}
				return prev;
			});
		}

		window.addEventListener('keydown', handleType);

		return () => window.removeEventListener('keydown', handleType);
	}, []);

	return typedLetters;
}
