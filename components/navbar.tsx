"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
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
  return (
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
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
