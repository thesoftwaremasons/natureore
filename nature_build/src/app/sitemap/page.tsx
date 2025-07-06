import React from "react";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const sitemapLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/products?category=staples", label: "Staples & Processed Foods" },
    { href: "/products?category=cash-crops", label: "Cash Crops & Natural Extracts" },
    { href: "/products?category=minerals", label: "Solid-State Minerals" },
    { href: "/products?category=specialty", label: "Specialty Products" },
    { href: "/contact", label: "Contact" },
];

const Page: React.FC = () => (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
        <section className="w-full max-w-2xl">
            <h1 className="text-4xl font-extrabold mb-10 text-emerald-400 text-center drop-shadow">
                Sitemap
            </h1>
            <div className="bg-white rounded-2xl shadow-xl p-10 border border-emerald-100">
                <ul className="space-y-4 text-lg">
                    {sitemapLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className="flex items-center gap-4 px-5 py-3 rounded-lg transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-600 font-semibold group"
                            >
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 group-hover:bg-emerald-400 group-hover:text-white transition-colors">
                                    <FaChevronRight className="text-emerald-400 group-hover:text-white" />
                                </span>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    </main>
);

export default Page;