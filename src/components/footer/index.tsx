import React from 'react';
//next
import Link from 'next/link';

function Footer() {
  return (
    <div className="container mx-auto text-center py-8">
      <Link
        target="_blank"
        href={'https://github.com/asadbekabdulhamidov'}
        className="text-green-400 text-2x font-medium"
      >
        Asadbek Abdulkhamidov following
      </Link>
    </div>
  );
}

export default Footer;
