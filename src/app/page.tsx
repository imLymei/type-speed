import LettersScreen from '@/components/LettersScreen';
import Percentage from '@/components/Percentage';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex flex-col gap-[max(1px,6vh)] justify-center lg:items-center min-h-screen p-6'>
			<div className='relative text-6xl flex items-center justify-center gap-2 select-none'>
				<Image src={'/images/icon.png'} alt='icon' width={100} height={100} quality={100} draggable={false} />
				<h1 className=''>FasType</h1>
				<Percentage />
			</div>
			<LettersScreen />
		</main>
	);
}
