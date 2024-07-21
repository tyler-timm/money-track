import { SignedIn, SignedOut } from '@clerk/nextjs';
import { SignInButton } from '@clerk/nextjs';
import { UserButton } from '@clerk/nextjs';

export default function Header() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-5xl font-bold p-5 text-yellow-500'>Money Track</h1>
            <SignedOut>
                <ul className='self-end justify-center mr-10 text-yellow-500 text-xl'>
                    <SignInButton />
                </ul>
                <h2 className='text-lg'>Please sign in to view your transactions</h2>
            </SignedOut>
            <SignedIn>
                <ul className='self-end justify-center mr-10 text-yellow-500 text-xl'>
                    <UserButton />
                </ul>
            </SignedIn>
        </div>
    );
}