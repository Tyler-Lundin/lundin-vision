import Link from "next/link";
import { CONFIG } from "@/config";


export default function Footer() {
    return(
        <footer className="border-t bg-gray-50/50 dark:bg-black/50 backdrop-blur-sm z-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                Contact
              </h3>
              <ul className="mt-4 space-y-2">
                <li className="text-base text-gray-500 dark:text-gray-400">
                  {CONFIG.siteName}
                </li>
                <li className="text-base text-gray-500 dark:text-gray-400">
                  123 Vision Street, Seattle, WA 98101
                </li>
                <li className="text-base text-gray-500">
                  (206) 555-0123
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 tracking-wider uppercase">
                Quick Links
              </h3>
              <ul className="mt-4 space-y-2">
                {/* TODO: Update footer links if they should also use navigationLinks */}
                {/* For now, keeping the old structure as it might be different */}
                {[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/contact' }].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8">
            <p className="text-center text-base text-gray-400">
              &copy; {new Date().getFullYear()} {CONFIG.siteName}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    )
}