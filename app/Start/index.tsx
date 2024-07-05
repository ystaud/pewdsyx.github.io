import Navbar from '../../components/Navbar'; // Import your Navbar component
import Image from 'next/image'; // Import Image component from Next.js
import Footer from '../../components/Footer';

const Start = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar component */}
      <Navbar />

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero section */}
        <section className="flex flex-col items-center justify-center">
          {/* Example of using Next.js Image component */}
          <div className="relative h-72 w-full">
            <Image
              src="/your-image.jpg" // Replace with your image path
              alt="Your Alt Text"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mt-8">
            Welcome to My Next.js App with Tailwind CSS!
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Get started by editing{' '}
            <code className="bg-gray-200 p-1 rounded">app/page.tsx</code>
          </p>
        </section>

        {/* Additional sections or content */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Featured Projects</h2>
          {/* Example of a grid or list of featured projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {/* Project cards or items */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Project 1</h3>
              <p className="mt-2 text-gray-600">
                Description of Project 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">Project 2</h3>
              <p className="mt-2 text-gray-600">
                Description of Project 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            {/* Add more project items as needed */}
          </div>
        </section>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Home;