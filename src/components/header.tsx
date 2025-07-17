
"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, ChevronDown, User, Settings } from "lucide-react";
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
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useAuth();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
    const isActive = isMounted && pathname === href;
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
  
  const resourcesActive = isMounted && (pathname.startsWith('/ai-setup-guide') || pathname.startsWith('/fingering-charts'));

  return (
    <header className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled 
          ? "border-b bg-card shadow-sm" 
          : "border-b border-transparent"
      )}>
      <div className="flex h-14 items-center justify-between px-4 md:px-6">
        
        {/* Mobile: Left Logo & Right Menu Button */}
         <div className="flex flex-1 items-center justify-start md:hidden">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
        </div>
        
        {/* Desktop: Centered Nav */}
        <div className="hidden md:flex flex-1 justify-start">
           {/* This empty div takes up space to help center the logo group */}
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center gap-x-6">
                <DropdownMenu>
                    <DropdownMenuTrigger
                    className={cn(
                        "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary data-[state=open]:text-primary focus-visible:outline-none",
                        resourcesActive ? "text-primary" : "text-muted-foreground"
                    )}
                    >
                    All Resources
                    <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                        <Link href="/ai-setup-guide">Startup Guides</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/fingering-charts">Fingering Charts</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link href="/fingering-charts/quizzes">Quizzes</Link>
                    </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Link href="/" className="flex items-center space-x-2">
                    <Logo />
                </Link>

                <NavLink href="/pricing">Pricing</NavLink>
            </div>
        </div>

        {/* Right Side (Desktop and Mobile Fallback) */}
        <div className="flex flex-1 items-center justify-end">
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
                    <NavLink href="/pricing">Pricing</NavLink>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="instrument-resources" className="border-b-0">
                        <AccordionTrigger
                            className={cn(
                            "py-1 text-sm font-medium transition-colors hover:text-primary hover:no-underline",
                            resourcesActive ? "text-primary" : "text-muted-foreground"
                            )}
                        >
                            All Resources
                        </AccordionTrigger>
                        <AccordionContent className="pt-2 pl-6 flex flex-col gap-4">
                            <NavLink href="/ai-setup-guide">Startup Guides</NavLink>
                            <NavLink href="/fingering-charts">Fingering Charts</NavLink>
                            <NavLink href="/fingering-charts/quizzes">Quizzes</NavLink>
                        </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    </nav>
                    <div className="p-4 border-t">
                    {user ? (
                        <div className="flex flex-col gap-4">
                            <Link href="/profile" className="flex items-center gap-2 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                            <User className="h-5 w-5" />
                            <span>Profile</span>
                            </Link>
                            <Link href="/settings" className="flex items-center gap-2 font-medium text-muted-foreground hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            <Settings className="h-5 w-5" />
                            <span>Settings</span>
                            </Link>
                            <DropdownMenuSeparator />
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
      </div>
    </header>
  );
}
