import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/">
              <a className="text-white hover:text-gray-300">Home</a>
            </Link>
            <Link href="/projects">
              <a className="text-white hover:text-gray-300">Projects</a>
            </Link>
            <Link href="/publications">
              <a className="text-white hover:text-gray-300">Publications</a>
            </Link>
            <Link href="/interests">
              <a className="text-white hover:text-gray-300">Interests</a>
            </Link>
            <Link href="/about">
              <a className="text-white hover:text-gray-300">About</a>
            </Link>
          </div>
          {/* Add any additional elements here, such as logo or user profile */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;