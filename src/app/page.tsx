import LettersScreen from '@/components/LettersScreen';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-col gap-16 justify-center lg:items-center min-h-screen p-6'>
			<div className='text-6xl flex items-center justify-center gap-2 select-none'>
				<Image src={'/images/icon.png'} alt='icon' width={100} height={100} draggable={false} />
				<h1 className=''>FasType</h1>
			</div>
			<LettersScreen />
		</main>
	);
}
