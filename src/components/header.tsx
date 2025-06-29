"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, ChevronDown, Settings } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";
import { instruments, type Instrument } from "@/lib/instrument-data";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState<Instrument | null>(null);
  const [isInstrumentDialogOpen, setIsInstrumentDialogOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const storedInstrumentSlug = localStorage.getItem("primaryInstrument");
    if (storedInstrumentSlug) {
      const found = instruments.find((i) => i.slug === storedInstrumentSlug);
      setSelectedInstrument(found || null);
    }
  }, []);

  const handleInstrumentSelect = (slug: string) => {
    const instrument = instruments.find((i) => i.slug === slug);
    if (instrument) {
      setSelectedInstrument(instrument);
      localStorage.setItem("primaryInstrument", instrument.slug);
    }
    setIsInstrumentDialogOpen(false);
  };
  
  const instrumentCategories = [...new Set(instruments.map(i => i.category))];
  const categoryOrder = ["Woodwind", "Brass", "Percussion", "String"];
  const sortedCategories = instrumentCategories.sort((a, b) => {
    const indexA = categoryOrder.indexOf(a);
    const indexB = categoryOrder.indexOf(b);
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });

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

  const MyInstrumentMobileMenu = () => {
    const triggerText = isMounted && selectedInstrument ? selectedInstrument.name : "My Instrument";
    const isActive = isMounted && pathname.startsWith("/fingering-charts");

    const menuContent = (
      <div className="flex flex-col gap-4">
        <NavLink href="/fingering-charts">Note Lookup</NavLink>
        <NavLink href="/fingering-charts/quizzes">Quizzes</NavLink>
        <div
          onClick={() => {
            setIsInstrumentDialogOpen(true);
            setIsMobileMenuOpen(false);
          }}
          className="flex items-center text-sm font-medium transition-colors hover:text-primary text-muted-foreground cursor-pointer"
        >
          <Settings className="mr-2 h-4 w-4" />
          {selectedInstrument ? "Change Instrument" : "Select Instrument"}
        </div>
      </div>
    );

    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="my-instrument" className="border-b-0">
          <AccordionTrigger
            className={cn(
              "py-1 text-sm font-medium transition-colors hover:text-primary hover:no-underline",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            {triggerText}
          </AccordionTrigger>
          <AccordionContent className="pt-2 pl-6">{menuContent}</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Dialog open={isInstrumentDialogOpen} onOpenChange={setIsInstrumentDialogOpen}>
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Logo />
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/ai-setup-guide">Instrument Guides</NavLink>
              
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary data-[state=open]:text-primary focus-visible:outline-none",
                    isMounted && pathname.startsWith("/fingering-charts") ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {isMounted && selectedInstrument ? selectedInstrument.name : "My Instrument"}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem asChild>
                    <Link href="/fingering-charts">Note Lookup</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/fingering-charts/quizzes">Quizzes</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DialogTrigger asChild>
                    <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                      <Settings className="mr-2 h-4 w-4" />
                      {selectedInstrument ? "Change Instrument" : "Select Instrument"}
                    </DropdownMenuItem>
                  </DialogTrigger>
                </DropdownMenuContent>
              </DropdownMenu>

            </nav>
          </div>

          <div className="flex flex-1 items-center justify-between space-x-2 md:hidden">
              <Link href="/" className="flex items-center space-x-2">
                  <Logo />
              </Link>
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button variant="ghost" className="px-2">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full">
                      <div className="flex items-center justify-between p-4 border-b">
                          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                              <Logo />
                          </Link>
                      </div>
                      <nav className="flex flex-col gap-4 p-4">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/ai-setup-guide">Instrument Guides</NavLink>
                        <MyInstrumentMobileMenu />
                      </nav>
                  </div>
                  </SheetContent>
              </Sheet>
          </div>
        </div>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>My Instrument</DialogTitle>
            <DialogDescription>
              Select your primary instrument to personalize your experience.
            </DialogDescription>
          </DialogHeader>
          <div className="pt-4">
            <Select onValueChange={handleInstrumentSelect} defaultValue={selectedInstrument?.slug}>
              <SelectTrigger>
                <SelectValue placeholder="Select an instrument..." />
              </SelectTrigger>
              <SelectContent>
                {sortedCategories.map(category => (
                  <SelectGroup key={category}>
                    <SelectLabel>{category}</SelectLabel>
                    {instruments.filter(i => i.category === category).map(instrument => (
                      <SelectItem key={instrument.slug} value={instrument.slug}>
                        {instrument.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                ))}
              </SelectContent>
            </Select>
          </div>
        </DialogContent>
      </Dialog>
    </header>
  );
}
