import './globals.css'
import { Noto_Sans } from 'next/font/google';
import Header from '@/components/Header';

export const metadata = {
    title: 'Money Track',
    description: 'Created by Tyler Timm',
}

const notoSans = Noto_Sans({
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`base-style ${notoSans.className}`}>
                <Header />
                <main className=''>{children}</main>
            </body>
        </html>
    )
}
