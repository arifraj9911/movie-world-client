import { Facebook, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const upcomingMovies = [
    "JAWAN",
    "The Vampire Diaries",
    "Barbie",
    "Teen all",
    "NCIS",
  ];

  const additionalPages = [
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="max-w-[1280px] mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Upcoming Movies Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">
              Upcoming Movies
            </h3>
            <ul className="space-y-3">
              {upcomingMovies.map((movie) => (
                <li key={movie}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {movie}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Pages Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-wide">
              Additional Pages
            </h3>
            <ul className="space-y-3">
              {additionalPages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand and Social Section */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-8 ">
                <div className="flex flex-col items-baseline relative ">
                  <span className="text-blue-500 font-bold text-3xl tracking-tight">
                    MOVIE
                  </span>
                  <span className="text-white font-medium text-base  absolute -bottom-4 -right-3 ">
                    World
                  </span>
                </div>
              </div>
              <p className="text-gray-400  leading-relaxed mt-6">
                © 2021 movieworld.com. All Rights Reserved. This site is not
                affiliated or owned by the listed movie streaming platform
                owners.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-gray-500 text-sm">
            Copyright © 2023 movieworld ALL Right Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
