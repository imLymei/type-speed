import Link from 'next/link';

export default function Footer() {
	return (
		<div className='absolute bottom-0 w-screen text-neutral-800 border-t border-t-neutral-800 flex justify-center items-center p-2'>
			<p>
				All Rights Reserved{' '}
				<Link href={'https://github.com/imLymei'} target='_blank'>
					imLymei
				</Link>
				©2023
			</p>
			<p className='absolute right-4'>v0.1.3</p>
		</div>
	);
}
