"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Logo } from "@/components/logo";

const quarters = [
  {
    title: "Fall",
    books: [
      {
        title: "Odyssey Book 9",
        href: "/fall/odyssey",
        description: "Myth | Technology | Xenia",
      },
      {
        title: "Book 2",
        href: "/fall/book2",
        description: "Description of Book 2",
      },
      {
        title: "Book 3",
        href: "/fall/book3",
        description: "Description of Book 3",
      },
    ],
  },
  {
    title: "Winter",
    books: [
      {
        title: "Book 1",
        href: "/winter/book1",
        description: "Description of Book 1",
      },
      {
        title: "Book 2",
        href: "/winter/book2",
        description: "Description of Book 2",
      },
      {
        title: "Book 3",
        href: "/winter/book3",
        description: "Description of Book 3",
      },
    ],
  },
  {
    title: "Spring",
    books: [
      {
        title: "Book 1",
        href: "/spring/book1",
        description: "Description of Book 1",
      },
      {
        title: "Book 2",
        href: "/spring/book2",
        description: "Description of Book 2",
      },
      {
        title: "Book 3",
        href: "/spring/book3",
        description: "Description of Book 3",
      },
    ],
  },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 left-0 w-full z-50 border-b bg-background">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <span className="text-xl font-bold">Logo</span> */}
          <Logo />
        </Link>

        {/* Desktop Navigation Menu */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {quarters.map((quarter) => (
                <NavigationMenuItem key={quarter.title}>
                  <NavigationMenuTrigger>
                    {quarter.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4 md:w-[300px]">
                      {quarter.books.map((book) => (
                        <ListItem
                          key={book.title}
                          title={book.title}
                          href={book.href}
                        >
                          {book.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Accordion type="single" collapsible className="w-full">
                {quarters.map((quarter) => (
                  <AccordionItem value={quarter.title} key={quarter.title}>
                    <AccordionTrigger>{quarter.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {quarter.books.map((book) => (
                          <li key={book.title}>
                            <Link
                              href={book.href}
                              className="block rounded-md p-2 hover:bg-accent"
                              onClick={() => setOpen(false)}
                            >
                              <div className="font-medium">{book.title}</div>
                              <div className="text-sm text-muted-foreground">
                                {book.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

interface ListItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string
  href: string
  children: React.ReactNode
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ title, href, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent",
            props.className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
)
ListItem.displayName = "ListItem"
