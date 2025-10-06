import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Search, User } from "lucide-react";
import { TiArrowSortedDown } from "react-icons/ti";

export default function Navbar() {
  return (
    <nav className=" border-b border-gray-800">
      <div className="flex items-center justify-between py-6 max-w-[1280px] gap-10 mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-8 ">
          <div className="flex flex-col items-baseline relative -mt-3">
            <span className="text-blue-500 font-bold text-3xl tracking-tight">
              MOVIE
            </span>
            <span className="text-white font-medium text-base  absolute -bottom-4 -right-3 ">World</span>
          </div>
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
                <button className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-2 px-2 py-2 text-base text-gray-700 bg-gray-300 rounded-lg  ">
                  All
                  {/* <ChevronDown className="w-4 h-4" /> */}
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
          <button className="text-yellow-500 font-medium hover:text-yellow-400 transition-colors">
            Get Pro
          </button>
          <button className="text-white font-medium hover:text-gray-300 transition-colors">
            Movies
          </button>
          <button className="text-white font-medium hover:text-gray-300 transition-colors">
            Watch-list
          </button>

          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="default"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-[50px]" 
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
