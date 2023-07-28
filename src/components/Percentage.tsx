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
		isTierS = typeControl?.accuracy >= 80;
		isTierA = typeControl?.accuracy < 80 && typeControl?.accuracy >= 40;
		isTierB = typeControl?.accuracy < 40;
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
				Accuracy: {`${typeControl?.accuracy}%`}
			</p>
			<p className='text-green-500'>Correct: {`${typeControl?.typedCorrect}`}</p>
			<p>Total: {`${typeControl?.letters.length}`}</p>
		</div>
	);
}
