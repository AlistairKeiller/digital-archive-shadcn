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
import { ChevronDown, Menu } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const quarters = [
  {
    title: "Fall",
    books: [
      {
        title: "Book 1",
        href: "/fall/book1",
        description: "Description of Book 1",
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
    <header className="border-b sticky top-0 bg-background z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Placeholder logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">Logo</span>
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {quarters.map((quarter) => (
                <NavigationMenuItem key={quarter.title}>
                  <NavigationMenuTrigger>{quarter.title}</NavigationMenuTrigger>
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
        </div>

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
                {quarters.map((quarter, index) => (
                  <AccordionItem value={quarter.title} key={index}>
                    <AccordionTrigger>{quarter.title}</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {quarter.books.map((book, bookIndex) => (
                          <li key={bookIndex}>
                            <Link
                              href={book.href}
                              className="block p-2 hover:bg-accent rounded-md"
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

interface ListItemProps {
  className?: string
  title: string
  children: React.ReactNode
  href: string
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
            <Link
            href={href}
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent",
              className
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
  }
)
ListItem.displayName = "ListItem"