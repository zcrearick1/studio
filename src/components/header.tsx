"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  {
    label: "Fingering Charts",
    hrefPrefix: "/fingering-charts",
    sublinks: [
      { href: "/fingering-charts", label: "Note Lookup" },
      { href: "/fingering-charts/pdf-downloads", label: "PDF Downloads" },
      { href: "/fingering-charts/quizzes", label: "Quizzes" },
      { href: "/fingering-charts/study", label: "Study" },
    ],
  },
  { href: "/ai-setup-guide", label: "Instrument Guides" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <Link
      href={href}
      onClick={() => setIsMobileMenuOpen(false)}
      className={cn(
        "text-sm font-medium transition-colors hover:text-primary",
        pathname === href ? "text-primary" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo />
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) =>
              link.sublinks ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger
                    className={cn(
                      "flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary data-[state=open]:text-primary focus-visible:outline-none",
                      pathname.startsWith(link.hrefPrefix!) ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {link.sublinks.map((sublink) => (
                      <DropdownMenuItem key={sublink.href} asChild>
                        <Link href={sublink.href}>{sublink.label}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <NavLink key={link.href} href={link.href!} label={link.label} />
              )
            )}
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
                <SheetHeader>
                    <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                    <SheetDescription className="sr-only">A list of pages to navigate to.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 border-b">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <Logo />
                        </Link>
                    </div>
                    <nav className="flex flex-col gap-4 p-4">
                      {navLinks.map((link) =>
                        link.sublinks ? (
                          <Accordion type="single" collapsible className="w-full" key={link.label}>
                            <AccordionItem value={link.label} className="border-b-0">
                              <AccordionTrigger className={cn(
                                "py-1 text-sm font-medium transition-colors hover:text-primary hover:no-underline",
                                pathname.startsWith(link.hrefPrefix!) ? "text-primary" : "text-muted-foreground"
                              )}>
                                {link.label}
                              </AccordionTrigger>
                              <AccordionContent className="pt-2 pl-6">
                                <div className="flex flex-col gap-4">
                                  {link.sublinks.map((sublink) => (
                                    <NavLink key={sublink.href} href={sublink.href} label={sublink.label} />
                                  ))}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        ) : (
                          <NavLink key={link.href} href={link.href!} label={link.label} />
                        )
                      )}
                    </nav>
                </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
