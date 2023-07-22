'use client';

import cn from '@/utils/cn';
import { TypeContext } from '@/utils/contexts';
import { useContext, useRef } from 'react';
import LetterCard from './letterScreen/LetterCard';

export default function LettersScreen() {
	const typeControl = useContext(TypeContext);
	const prase = useRef<Letter[]>([]);

	return (
		<div className='flex flex-col gap-2 w-[60vw]'>
			<div className='flex flex-wrap text-2xl gap-y-5'>
				{typeControl?.letters.map((letter, index) => {
					const isSpace = letter === ' ' || typeControl.letters.length - 1 === index;

					prase.current.push({ letter, index });

					if (isSpace) {
						const actualPrase = prase.current;
						prase.current = [];

						return (
							<div
								key={`prase ${index}`}
								className={cn('flex rounded-md py-2', {
									'border-t border-white':
										typeControl.typedLetters.length >= actualPrase[0].index &&
										typeControl.typedLetters.length <= actualPrase[actualPrase.length - 1].index,
								})}>
								{actualPrase.map((praseLetter) => (
									<LetterCard key={praseLetter.index} praseLetter={praseLetter} typeControl={typeControl} />
								))}
							</div>
						);
					}
				})}
			</div>
			<span>{typeControl?.typedLetters.map((letter, index) => <span key={index}>{letter}</span>)}</span>
		</div>
	);
}
