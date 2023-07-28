type TypeControl = {
	letters: string[];
	setLetters: (number?: number) => void;
	typedLetters: string[];
	clearTypedLetters: () => void;
	typedCorrect: number;
	accuracy: number;
};
