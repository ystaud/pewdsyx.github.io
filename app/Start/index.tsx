import Navbar from '../../components/Navbar'; // Import your Navbar component
import Footer from '../../components/Footer';

const Start = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar component */}
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 py-8 flex">
        <div className="w-3/4 pr-4">
          {/* Left column content */}
          <p>Hello World Left.</p>
        </div>
        <div className="w-1/4">
          {/* Right column content */}
          <p>Hello World Right.</p>
        </div>
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Start;