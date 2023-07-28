'use client';

import cn from '@/utils/cn';
import { TypeContext } from '@/utils/contexts';
import { useContext, useEffect, useRef, useState } from 'react';
import LetterCard from './letterScreen/LetterCard';
import { useWindowSize } from '@lymei/hooks';

export default function LettersScreen() {
	const [diference, setDiference] = useState(0);
	const windowSize = useWindowSize();

	const typeControl = useContext(TypeContext);

	const prase = useRef<Letter[]>([]);
	const main = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const selectedComponent = document.getElementById('selected')?.getBoundingClientRect();
		const mainComponent = main.current?.getBoundingClientRect();

		if (mainComponent && selectedComponent) {
			setDiference(mainComponent.y - selectedComponent.y);
		}

		if (typeControl?.letters.length === typeControl?.typedLetters.length) {
			typeControl?.setLetters(20);
			typeControl?.clearTypedLetters();
		}
	}, [typeControl, windowSize]);

	return (
		<>
			<div className='relative flex flex-col gap-2 lg:w-[60vw] h-[400px] overflow-hidden'>
				<div
					className='flex flex-wrap text-2xl gap-y-5 transition-all'
					ref={main}
					style={{ transform: `translate(0px, ${diference}px)` }}>
					{typeControl?.letters.map((letter, index) => {
						const isSpace = letter === ' ' || typeControl.letters.length - 1 === index;

						prase.current.push({ letter, index });

						if (isSpace) {
							const actualPrase = prase.current;
							prase.current = [];

							const isSelected =
								typeControl.typedLetters.length >= actualPrase[0].index &&
								typeControl.typedLetters.length <= actualPrase[actualPrase.length - 1].index;

							return (
								<div
									key={`prase ${index}`}
									id={isSelected ? 'selected' : ''}
									className={cn('flex rounded-md py-2 select-none', {
										'border-t border-white': isSelected,
									})}>
									{actualPrase.map((praseLetter) => (
										<LetterCard key={praseLetter.index} praseLetter={praseLetter} typeControl={typeControl} />
									))}
								</div>
							);
						}
					})}
				</div>
			</div>
			<div
				className='h-px w-full bg-yellow-500 origin-left transition-all'
				style={{
					transform: `scale(${
						typeControl ? typeControl.typedLetters.length / typeControl.letters.length : 0
					}, 1)`,
				}}
			/>
			<button
				onClick={(event) => {
					typeControl?.setLetters(20);
					event.currentTarget.blur();
				}}
				className='py-2 px-6 border border-white rounded-md hover:bg-white/20 active:bg-white/10 transition-colors select-none'>
				Reset
			</button>
		</>
	);
}
