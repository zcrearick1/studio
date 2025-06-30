"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, ChevronDown, User } from "lucide-react";
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
      <div className="container flex h-14 items-center px-4 md:px-6">
        
        <div className="flex flex-1 items-center justify-between">
          <div className="flex items-center gap-x-6">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
            </Link>
            <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
              <NavLink href="/">Home</NavLink>
              
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary data-[state=open]:text-primary focus-visible:outline-none",
                    resourcesActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  Instrument Resources
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

            </nav>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                    <span className="sr-only">Toggle user menu</span>
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
              <>
                <Button asChild variant="ghost"><Link href="/login">Log In</Link></Button>
                <Button asChild><Link href="/signup">Sign Up</Link></Button>
              </>
            )}
          </div>
        
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
                    <SheetDescription className="sr-only">A list of navigation links for the MusicMate app.</SheetDescription>
                      <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                          <Logo />
                      </Link>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 p-4 flex-1">
                    <NavLink href="/">Home</NavLink>
                    
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="instrument-resources" className="border-b-0">
                        <AccordionTrigger
                          className={cn(
                            "py-1 text-sm font-medium transition-colors hover:text-primary hover:no-underline",
                            resourcesActive ? "text-primary" : "text-muted-foreground"
                          )}
                        >
                          Instrument Resources
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
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
