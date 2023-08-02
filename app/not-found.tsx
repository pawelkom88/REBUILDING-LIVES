import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-9xl">404</h1>

        <p className="text-heading font-bold tracking-tigh">Uh-oh!</p>

        <p className="mt-4">We can&apos;t find that page.</p>

        <Link
          href="/"
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white border-2 border-primary-clr bg-primary-clr rounded hover:bg-white hover:text-primary-clr">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
