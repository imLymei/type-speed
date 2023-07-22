import cn from '@/utils/cn';
import React from 'react';

export default function LetterCard({
	praseLetter,
	typeControl,
}: {
	praseLetter: Letter;
	typeControl: TypeControl;
}) {
	return (
		<div
			className={cn('w-12 h-16 flex justify-center items-center rounded-md bg-white/10 mx-[2px]', {
				'bg-green-300/20': typeControl.typedLetters[praseLetter.index] === praseLetter.letter,
				'bg-red-300/20':
					typeControl.typedLetters.length > praseLetter.index &&
					typeControl.typedLetters[praseLetter.index] !== praseLetter.letter,
				'text-neutral-500': typeControl.typedLetters.length < praseLetter.index,
				'border-b border-b-white': typeControl.typedLetters.length === praseLetter.index,
			})}>
			{praseLetter.letter}
		</div>
	);
}
