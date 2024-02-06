// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-zinc-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-white font-bold text-lg">
            thesawrub
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white">
                Docs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-white">
                Social
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
