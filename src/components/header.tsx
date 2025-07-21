
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, User, Settings } from "lucide-react";
import { signOut } from "firebase/auth";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/auth-context";
import { auth } from "@/lib/firebase";
import { instruments } from "@/lib/instrument-data";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [fingeringChartHref, setFingeringChartHref] = useState('/fingering-charts');

  useEffect(() => {
    setIsMounted(true);
    
    if (user && typeof window !== 'undefined') {
      const instrumentSlug = localStorage.getItem("primaryInstrument");
      const isValidSlug = instruments.some(inst => inst.slug === instrumentSlug);
      
      if (instrumentSlug && isValidSlug) {
        setFingeringChartHref(`/fingering-charts?instrument=${instrumentSlug}`);
      } else {
        setFingeringChartHref('/fingering-charts');
      }
    } else {
        setFingeringChartHref('/fingering-charts');
    }

  }, [user]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = async () => {
    if (!auth) return;
    await signOut(auth);
    router.push('/');
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const isActive = isMounted && (pathname === href || (href !== "/" && pathname.startsWith(href) && href.length > 1));
    return (
      <Link
        href={href}
        onClick={() => setIsMobileMenuOpen(false)}
        className={cn(
          "text-sm font-medium transition-colors hover:text-primary",
          isActive ? "text-primary" : "text-muted-foreground"
        )}
      >
        {children}
      </Link>
    );
  };
  
  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled 
          ? "border-b bg-card shadow-sm" 
          : "border-b border-transparent"
      )}>
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        {/* Left and Nav Section */}
        <div className="flex items-center gap-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-x-6">
            <NavLink href="/ai-setup-guide">Startup Guides</NavLink>
            <NavLink href={fingeringChartHref}>Fingering Charts</NavLink>
            <NavLink href="/fingering-charts/quizzes">Quizzes</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/fingering-charts/study">Study</NavLink>
            <NavLink href="/fingering-charts/pdf-downloads">PDF Downloads</NavLink>
          </nav>
        </div>

        {/* Right Auth Section */}
        <div className="hidden md:flex items-center gap-x-4">
            {user ? (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                    {user.photoURL ? (
                        <AvatarImage src={user.photoURL} alt={user.displayName ?? 'User profile picture'} />
                    ) : null}
                    <AvatarFallback>
                        <User className="h-5 w-5" />
                    </AvatarFallback>
                    </Avatar>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link href="/profile">Profile</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="/settings">Settings</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>Log out</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            ) : (
            <div className="flex items-center gap-x-2">
                <Button asChild variant="ghost"><Link href="/login">Log In</Link></Button>
                <Button asChild><Link href="/signup">Sign Up</Link></Button>
            </div>
            )}
        </div>
    
        {/* Mobile Menu Button*/}
        <div className="flex items-center md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" className="px-2">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col p-0">
                <SheetHeader className="p-4 border-b">
                <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                <SheetDescription className="sr-only">A list of navigation links for the Upbeat Music Trainer app.</SheetDescription>
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <Logo />
                    </Link>
                </SheetHeader>
                <nav className="flex flex-col gap-4 p-4 flex-1">
                    <NavLink href="/ai-setup-guide">Startup Guides</NavLink>
                    <NavLink href={fingeringChartHref}>Fingering Charts</NavLink>
                    <NavLink href="/fingering-charts/quizzes">Quizzes</NavLink>
                    <NavLink href="/fingering-charts/study">Study</NavLink>
                    <NavLink href="/fingering-charts/pdf-downloads">PDFs</NavLink>
                    <NavLink href="/pricing">Pricing</NavLink>
                </nav>
                <div className="p-4 border-t">
                {user ? (
                    <div className="flex flex-col gap-4">
                        <Link href="/profile" className="flex items-center gap-3 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                            <Avatar className="h-8 w-8">
                                {user.photoURL && <AvatarImage src={user.photoURL} alt={user.displayName ?? 'User profile picture'} />}
                                <AvatarFallback>
                                    <User className="h-5 w-5" />
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <span>{user.displayName || 'My Profile'}</span>
                                <span className="text-xs text-muted-foreground">{user.email}</span>
                            </div>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link href="/settings" className="flex items-center gap-2 font-medium text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            <Settings className="h-5 w-5" />
                            <span>Settings</span>
                        </Link>
                        <Button variant="ghost" className="justify-start -ml-2 text-muted-foreground" onClick={() => { handleLogout(); setIsMobileMenuOpen(false); }}>Log Out</Button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-2">
                        <Button asChild className="w-full" onClick={() => setIsMobileMenuOpen(false)}><Link href="/login">Log In</Link></Button>
                        <Button asChild variant="outline" className="w-full" onClick={() => setIsMobileMenuOpen(false)}><Link href="/signup">Sign Up</Link></Button>
                    </div>
                )}
                </div>
            </SheetContent>
        </Sheet>
        </div>
      </div>
    </header>
  );
}
