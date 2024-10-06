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
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  return (
    <header className="border-b sticky top-0 bg-white z-50">
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
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {/* You can replace this with an actual icon */}
          <span>☰</span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden">
          <ul>
            {quarters.map((quarter) => (
              <li key={quarter.title}>
                <div className="p-4 bg-gray-100">
                  <span className="font-bold">{quarter.title}</span>
                </div>
                <ul>
                  {quarter.books.map((book) => (
                    <li key={book.title}>
                        <Link href={book.href} className="block p-4 border-b">
                        <div className="font-medium">{book.title}</div>
                        <div className="text-sm text-gray-600">
                          {book.description}
                        </div>
                        </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}

interface ListItemProps {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}

const ListItem = React.forwardRef<HTMLDivElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link href={href} passHref legacyBehavior>
            <div
              ref={ref}
              className={cn(
                "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100",
                className
              )}
              {...props}
            >
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-gray-600">
                {children}
              </p>
            </div>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"