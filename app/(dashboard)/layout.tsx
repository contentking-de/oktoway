'use client';

import Link from 'next/link';
import Image from 'next/image';
import { use, useState, useEffect, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Home, LogOut, Menu, X } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { signOut } from '@/app/(login)/actions';
import { useRouter } from 'next/navigation';
import { User } from '@/lib/db/schema';
import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function UserMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSignUpInfoOpen, setIsSignUpInfoOpen] = useState(false);
  const { data: user } = useSWR<User>('/api/user', fetcher);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    mutate('/api/user');
    router.push('/');
  }

  // Attach global event listener consistently; only active for logged-out users
  useEffect(() => {
    if (!user) {
      const handler = () => setIsSignUpInfoOpen(true);
      window.addEventListener('open-signup-info', handler as EventListener);
      return () => window.removeEventListener('open-signup-info', handler as EventListener);
    }
  }, [user]);

  if (!user) {
    return (
      <>
        {isSignUpInfoOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
            <div className="absolute inset-0 bg-black/50" onClick={() => setIsSignUpInfoOpen(false)} />
            <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-gray-900">Coming soon...</h3>
                <Button variant="ghost" onClick={() => setIsSignUpInfoOpen(false)}>Schließen</Button>
              </div>
              <div className="mt-3 text-gray-700 space-y-2">
                <p>Unser Lehrer-Bereich befindet sich im Aufbau.</p>
                <p>In Kürze können hier die OKTOWAY Schulungsunterlagen eingesehen und herunter geladen werden.</p>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer size-9">
          <AvatarImage alt={user.name || ''} />
          <AvatarFallback>
            {user.email
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="flex flex-col gap-1">
        <DropdownMenuItem className="cursor-pointer">
          <Link href="/dashboard" className="flex w-full items-center">
            <Home className="mr-2 h-4 w-4" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <form action={handleSignOut} className="w-full">
          <button type="submit" className="flex w-full">
            <DropdownMenuItem className="w-full flex-1 cursor-pointer">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Sign out</span>
            </DropdownMenuItem>
          </button>
        </form>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/oktoway-smile.png" width={80} height={80} alt="OKTOWAY" className="h-20 w-20" />
          <div className="ml-3 leading-tight">
            <div className="text-4xl md:text-5xl font-extrabold leading-none">
              <span className="text-[#006465]">OKTO</span>
              <span className="text-[#f8bd39]">WAY</span>
            </div>
            <div className="text-xs md:text-sm text-gray-600 mt-0 leading-none">Acht Wege zu ganzheitlicher Stärke</div>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <nav className="hidden md:flex items-center space-x-6 mr-6">
            <Link href="/" className="text-base font-medium text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/#wege" className="text-base font-medium text-gray-700 hover:text-gray-900">8 Wege</Link>
            <Link href="/#fuer-wen" className="text-base font-medium text-gray-700 hover:text-gray-900">Für wen?</Link>
            <Link href="/#herausforderungen" className="text-base font-medium text-gray-700 hover:text-gray-900">Herausforderungen</Link>
            <Link href="/#warum" className="text-base font-medium text-gray-700 hover:text-gray-900">Warum OKTOWAY?</Link>
          </nav>
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileNavOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <Suspense fallback={<div className="h-9" />}>
            <UserMenu />
          </Suspense>
        </div>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileNavOpen(false)} />
          <div className="relative bg-white shadow-lg rounded-b-xl p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900">Navigation</span>
              <button
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMobileNavOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-3 grid gap-2">
              <Link href="/" className="py-2 text-base text-gray-800" onClick={() => setIsMobileNavOpen(false)}>Home</Link>
              <Link href="/#wege" className="py-2 text-base text-gray-800" onClick={() => setIsMobileNavOpen(false)}>8 Wege</Link>
              <Link href="/#fuer-wen" className="py-2 text-base text-gray-800" onClick={() => setIsMobileNavOpen(false)}>Für wen?</Link>
              <Link href="/#herausforderungen" className="py-2 text-base text-gray-800" onClick={() => setIsMobileNavOpen(false)}>Herausforderungen</Link>
              <Link href="/#warum" className="py-2 text-base text-gray-800" onClick={() => setIsMobileNavOpen(false)}>Warum OKTOWAY?</Link>
              <button
                className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-4 py-2"
                onClick={() => {
                  setIsMobileNavOpen(false);
                  const event = new CustomEvent('open-signup-info');
                  window.dispatchEvent(event);
                }}
              >
                Registrieren
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      {children}
    </section>
  );
}
