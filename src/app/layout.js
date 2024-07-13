import './globals.css'
import { Noto_Sans } from 'next/font/google';
import Header from '@/components/Header';
import {
    ClerkProvider,
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'

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
        <ClerkProvider>
            <html lang="en">
                <body className={`base-style ${notoSans.className}`}>
                    <Header />
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                        <main className=''>{children}</main>
                    </SignedIn>
                </body>
            </html>
        </ClerkProvider>
    )
}
