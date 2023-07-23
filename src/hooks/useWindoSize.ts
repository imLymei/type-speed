import { useEffect, useState } from 'react';

type WindowSize = {
	width: number;
	height: number;
};

export function useWindowSize(): WindowSize {
	const [windowSize, setWindowSize] = useState<WindowSize>({ width: 0, height: 0 });

	useEffect(() => {
		function handleWindowResize() {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		}

		handleWindowResize();

		window.addEventListener('resize', handleWindowResize);

		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);

	return windowSize;
}
