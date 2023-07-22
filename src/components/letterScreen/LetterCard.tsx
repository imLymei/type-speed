import cn from '@/utils/cn';
import React from 'react';

export default function LetterCard({
	praseLetter,
	typeControl,
}: {
	praseLetter: Letter;
	typeControl: TypeControl;
}) {
	const isCorrect = typeControl.typedLetters[praseLetter.index] === praseLetter.letter;
	const isWrong = typeControl.typedLetters[praseLetter.index] !== praseLetter.letter;

	const isBefore = typeControl.typedLetters.length > praseLetter.index;
	const isAfter = typeControl.typedLetters.length < praseLetter.index;
	const isActual = typeControl.typedLetters.length === praseLetter.index;

	return (
		<div
			className={cn('w-12 h-16 flex justify-center items-center rounded-md bg-white/10 mx-[2px]', {
				'bg-green-300/20 text-green-300/80': isCorrect,
				'bg-red-300/20 text-red-300/80': isBefore && isWrong,
				'text-neutral-500': isAfter,
				'border-b border-b-white': isActual,
			})}>
			{praseLetter.letter}
		</div>
	);
}
