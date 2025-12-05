"use client";
import Link from "next/link";

export default function MobileMenu({ open }: { open: boolean }) {
  if (!open) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-100">
      <Link className="block px-4 py-3" href="/">Portfolio</Link>
      <Link className="block px-4 py-3" href="/about">About Me</Link>
      <Link className="block px-4 py-3" href="/contact">Contact</Link>
    </div>
  );
}
