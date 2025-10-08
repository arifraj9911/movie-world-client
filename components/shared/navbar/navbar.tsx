"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, User, Menu, X } from "lucide-react";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleWatchListClick = () => {
    if (pathname !== "/") {
      router.push("/#watch-list");
    } else {
      const section = document.getElementById("watch-list");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const navigationItems = [
    { href: "/get-pro", label: "Get Pro" },
    { href: "/movies", label: "Movies" },
  ];

  return (
    <nav className="border-b border-gray-800 bg-black relative z-50">
      <div className="flex items-center justify-between py-4 px-4 lg:py-6 max-w-[1280px] mx-auto">
        {/* Left - Logo */}
        <Link
          href="/"
          className="flex flex-col items-baseline relative -mt-3"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="text-[#1e8ae3] font-bold text-2xl lg:text-3xl tracking-tight">
            MOVIE
          </span>
          <span className="text-white font-medium text-sm lg:text-base absolute -bottom-4 -right-3">
            World
          </span>
        </Link>

        {/* Middle - Search Bar (hidden on mobile) */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4 lg:mx-8">
          <div className="relative flex items-center w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search movies"
              className="w-full bg-white rounded-md pl-10 pr-24 py-2 lg:py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1 lg:gap-2 px-2 py-1 lg:py-2 text-sm lg:text-base text-gray-700 bg-gray-300 rounded-lg">
                  All
                  <TiArrowSortedDown size={16} className="lg:w-5 lg:h-5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border border-gray-200"
              >
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Movies</DropdownMenuItem>
                <DropdownMenuItem>Actors</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Right - Desktop Nav + User + Language */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-base">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-medium transition-colors ${
                pathname === item.href
                  ? "text-yellow-500"
                  : "text-white hover:text-gray-300"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <button
            onClick={handleWatchListClick}
            className="font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            Watch-list
          </button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                size="lg"
                className="btn-gradient text-white font-medium rounded-[50px] text-sm lg:text-base"
              >
                EN
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border border-gray-200"
            >
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="text-white hover:text-gray-300 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </nav>

        {/* Right - Mobile Controls (Hamburger + icons) */}
        <div className="flex lg:hidden items-center gap-4">
          <button className="text-white hover:text-gray-300 transition-colors">
            <User className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 transition-transform duration-300"
          >
            {isMobileMenuOpen ? (
              <X size={26} className="transform rotate-180 transition-transform" />
            ) : (
              <Menu size={26} className="transform rotate-0 transition-transform" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with translate animation */}
      <div
        className={`fixed top-0 right-0 w-64 sm:w-72 h-full bg-black border-l border-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 space-y-6 overflow-y-auto h-full">
          {/* Close Button (optional duplicate for UX) */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-400"
          >
            <X size={22} />
          </button>

          {/* Search inside mobile menu */}
          <div className="relative flex items-center mt-10">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search movies"
              className="w-full bg-white rounded-md pl-10 pr-20 py-2 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 text-sm text-gray-700 bg-gray-300 rounded-lg">
                  All
                  <TiArrowSortedDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border border-gray-200"
              >
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Movies</DropdownMenuItem>
                <DropdownMenuItem>TV Shows</DropdownMenuItem>
                <DropdownMenuItem>Actors</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Links */}
          <div className="space-y-3">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 font-medium transition-colors ${
                  pathname === item.href
                    ? "text-yellow-500"
                    : "text-white hover:text-gray-300"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={handleWatchListClick}
              className="block w-full text-left py-2 font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              Watch-list
            </button>

            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="default"
                  className="btn-gradient text-white font-medium rounded-[50px] text-sm w-full justify-between"
                >
                  English
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-full border border-gray-200"
              >
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Spanish</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
                <DropdownMenuItem>German</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
}
