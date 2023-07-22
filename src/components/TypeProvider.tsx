'use client';

import { useState } from 'react';
import { TypeContext } from '@/utils/contexts';
import useKeyboard from '@/hooks/useKeyboard';

export default function TypeProvider({ children }: { children: React.ReactNode }) {
	const [letters, setLetters] = useState<string[]>(
		'moving dead appropriate very water poetry car soil story principle may rocky attached bush seed from whom three cast closer every cannot herd finally'.split(
			''
		)
	);
	const typedLetters = useKeyboard();

	const typeControl: TypeControl = {
		letters: letters,
		setLetters: setLetters,
		typedLetters: typedLetters,
	};

	return <TypeContext.Provider value={typeControl}>{children}</TypeContext.Provider>;
}
