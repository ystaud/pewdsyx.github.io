import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link href="/projects" className="text-white hover:text-gray-300">
              Projects
            </Link>
            <Link href="/publications" className="text-white hover:text-gray-300">
              Publications
            </Link>
            <Link href="/interests" className="text-white hover:text-gray-300">
              Interests
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300">
              About me
            </Link>
          </div>
          {/* Add any additional elements here, such as logo or user profile */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;