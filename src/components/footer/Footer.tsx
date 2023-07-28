import Link from 'next/link';

export default function Footer() {
	return (
		<div className='absolute bottom-0 w-screen text-neutral-800 border-t border-t-neutral-800 text-center p-2'>
			All Rights Reserved{' '}
			<Link href={'https://github.com/imLymei'} target='_blank'>
				imLymei
			</Link>
			©2023
			<p className='absolute right-4'>v0.1.2</p>
		</div>
	);
}
