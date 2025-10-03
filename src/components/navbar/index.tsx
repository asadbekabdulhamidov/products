import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className="container mx-auto px-3 flex items-center justify-between py-8">
      <h1 className="text-3xl text-green-600 font-extrabold">Logo</h1>
      <div className="flex items-center gap-15">
        <Link
          className="text-[20px] text-green-500 font-bold hover:text-green-700 transition-all duration-200"
          href="/users"
        >
          Users
        </Link>
        <Link
          className="text-[20px] text-green-500 font-bold hover:text-green-700 transition-all duration-200"
          href="/product"
        >
          Products
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
