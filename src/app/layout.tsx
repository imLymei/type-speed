import TypeProvider from '@/components/TypeProvider';
import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Footer from '@/components/footer/Footer';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: 'FasType',
	description: 'A website made to train your typing speed!',
	keywords: ['Next.js', 'React.js', 'Tailwind Css', 'Typing', 'Training', 'Auto Development'],
	authors: [{ name: 'imLymei', url: 'https://lymei.art' }],
	creator: 'imLymei',
	icons: {
		icon: '/images/icon.png',
		shortcut: '/images/icon.png',
		apple: '/images/icon.png',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<TypeProvider>{children}</TypeProvider>
				<Footer />
			</body>
		</html>
	);
}
