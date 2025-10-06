"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, User } from "lucide-react";
import Link from "next/link";
import { TiArrowSortedDown } from "react-icons/ti";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleWatchListClick = () => {
    if (pathname !== "/") {
      // Navigate to home first
      router.push("/#watch-list");
    } else {
      // If already on home, just smooth scroll
      const section = document.getElementById("watch-list");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="border-b border-gray-800">
      <div className="flex items-center justify-between py-6 max-w-[1280px] gap-10 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-8 ">
          <Link
            href="/"
            className="flex flex-col items-baseline relative -mt-3"
          >
            <span className="text-[#1e8ae3] font-bold text-3xl tracking-tight ">
              MOVIE
            </span>
            <span className="text-white font-medium text-base absolute -bottom-4 -right-3 ">
              World
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl mx-8">
          <div className="relative flex items-center">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search movies"
              className="w-full bg-white rounded-md pl-10 pr-24 py-3 text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-2 px-2 py-2 text-base text-gray-700 bg-gray-300 rounded-lg">
                  All
                  <TiArrowSortedDown size={20} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>All</DropdownMenuItem>
                <DropdownMenuItem>Movies</DropdownMenuItem>
                <DropdownMenuItem>TV Shows</DropdownMenuItem>
                <DropdownMenuItem>Actors</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-10 text-base">
          {/* Get Pro */}
          <Link
            href="/get-pro"
            className={`font-medium transition-colors ${
              pathname === "/get-pro"
                ? "text-yellow-500"
                : "text-white hover:text-gray-300"
            }`}
          >
            Get Pro
          </Link>

          {/* Movies */}
          <Link
            href="/movies"
            className={`font-medium transition-colors ${
              pathname === "/movies"
                ? "text-yellow-500"
                : "text-white hover:text-gray-300"
            }`}
          >
            Movies
          </Link>

          {/* Watch-list (scrolls or navigates) */}
          <button
            onClick={handleWatchListClick}
            className="font-medium text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            Watch-list
          </button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                size="lg"
                className="btn-gradient text-white font-medium rounded-[50px]"
              >
                EN
                <ChevronDown className="w-4 h-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>Spanish</DropdownMenuItem>
              <DropdownMenuItem>French</DropdownMenuItem>
              <DropdownMenuItem>German</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Icon */}
          <button className="text-white hover:text-gray-300 transition-colors">
            <User className="w-5 h-5" />
          </button>
        </nav>
      </div>
    </nav>
  );
}
