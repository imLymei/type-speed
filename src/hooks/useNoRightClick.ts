import { useEffect } from 'react';

export default function useNoRightClick() {
	useEffect(() => {
		function handleContextmenu(event: MouseEvent) {
			event.preventDefault();
		}
		document.addEventListener('contextmenu', handleContextmenu);
		return () => document.removeEventListener('contextmenu', handleContextmenu);
	}, []);
}
