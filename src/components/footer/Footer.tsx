import Link from "next/link";
import { CONFIG } from "@/config";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default function Footer() {
    return(
        <footer className="absolute bottom-0 left-0 right-0 z-[100] h-96 m-3 max-w-7xl mx-auto border-[1px] border-black/25 dark:border-white/25 rounded-lg bg-gradient-to-b from-gray-300/50 to-gray-100/50 dark:from-black/50 dark:to-black/25 shadow-sm z-20">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-widest uppercase">
                            Contact
                        </h3>
                        <ul className="mt-6 space-y-4">
                            <li className="text-base text-gray-600 dark:text-gray-300 font-light">
                                {CONFIG.siteName}
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-300 font-light flex items-center gap-2">
                                <MapPinIcon className="h-5 w-5 text-gray-400" />
                                123 Vision Street, Seattle, WA 98101
                            </li>
                            <li className="text-base text-gray-600 dark:text-gray-300 font-light flex items-center gap-2">
                                <PhoneIcon className="h-5 w-5 text-gray-400" />
                                (206) 555-0123
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 tracking-widest uppercase">
                            Quick Links
                        </h3>
                        <ul className="mt-6 space-y-4">
                            {[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }, { name: 'About', href: '/about' }, { name: 'Contact', href: '/contact' }].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-base text-gray-600 dark:text-gray-300 font-light hover:text-gray-900 dark:hover:text-white transition-colors duration-300 relative group"
                                    >
                                        {item.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full"></span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-center text-sm text-gray-500 dark:text-gray-400 tracking-wide">
                        &copy; {new Date().getFullYear()} {CONFIG.siteName}. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}