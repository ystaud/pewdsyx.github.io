import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <main className="p-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Next.js App with Tailwind CSS!
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Get started by editing <code className="bg-gray-200 p-1 rounded">app/page.tsx</code>
        </p>
      </main>
    </div>
  );
}