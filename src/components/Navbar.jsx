import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    { label: "Players", link: "/players" },
    { label: "Contact", link: "/contact" },
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gray-800 py-2 uppercase "
    >
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link className="text-5xl font-bold text-inherit" href="/">
            <img
              src="/logo.jpg"
              alt="logo"
              className="h-14 w-14 rounded-full"
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-8" justify="center">
        <NavbarItem>
          <Link
            className="text-white hover:text-red-500 transition-all font-semibold text-xl"
            href="/"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white hover:text-red-500 transition-all font-semibold text-xl"
            href="/about"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white hover:text-red-500 transition-all font-semibold text-xl"
            href="/players"
          >
            Players
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-white hover:text-red-500 transition-all font-semibold text-xl"
            href="/contact"
          >
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link className="w-full" href={item.link} size="lg">
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
