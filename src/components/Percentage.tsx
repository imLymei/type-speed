'use client';

import cn from '@/utils/cn';
import { TypeContext } from '@/utils/contexts';
import { useContext, useState } from 'react';

export default function Percentage() {
	const typeControl = useContext(TypeContext);

	let isTierS;
	let isTierA;
	let isTierB;

	if (typeControl) {
		isTierS = typeControl?.accuracy >= 0.8;
		isTierA = typeControl?.accuracy < 0.8 && typeControl?.accuracy >= 0.4;
		isTierB = typeControl?.accuracy < 0.4;
	}

	// const total = typeControl?.letters.reduce((total, actualLetter, index) => {
	// 	if (actualLetter === typeControl.typedLetters[index]) return total + 1;
	// 	return total;
	// }, 0);

	// const percentage =
	// 	total && typeControl ? Math.floor((total / typeControl?.letters.length) * 10000) / 100 : 0;

	return (
		<div className='absolute -bottom-10 flex justify-between items-center gap-12 w-[30vw] text-xl'>
			<p
				className={cn({
					'text-green-500': isTierS,
					'text-yellow-500': isTierA,
					'text-red-500': isTierB,
				})}>
				Accuracy: {`${typeControl?.accuracy ? Math.floor(typeControl?.accuracy * 10000) / 100 : 0}%`}
			</p>
			<p className='text-yellow-500'>Correct: {`${typeControl?.typedCorrect}`}</p>
			<p className='text-yellow-500'>
				Total: {`${typeControl?.typedLetters.length}`}/{`${typeControl?.letters.length}`}
			</p>
		</div>
	);
}
