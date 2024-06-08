import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/products" className="hover:underline">
          Products
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
