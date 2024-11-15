import { useRef } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function Home() {
  const benchmarksRef = useRef<HTMLDivElement | null>(null);

  const scrollToBenchmarks = () => {
    benchmarksRef.current?.scrollIntoView({
      behavior: "smooth", // Enable smooth scrolling
      block: "start",     // Align to the top of the viewport
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 mt-16 rounded-lg shadow-lg shadow-gray-300">
      {/* Hero Section */}
      <section className="w-full max-w-4xl px-6 py-16 text-center mt-16 rounded-lg">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">
          What Yakt does?
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Improves your smartphone performance, battery, and latency with some
          simple clicks! <br />
          It's Open Source and it's under MIT License so enjoy the app!
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://t.me/YAKTC"
            target="_blank"
            className="inline-block bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
          >
            Get Updates
          </a>
          <button
            onClick={scrollToBenchmarks}
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-200"
          >
            Benchmarks
          </button>
          <a
            href="https://t.me/YAKTD"
            target="_blank"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition duration-200 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-200"
          >
            Support Group
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-5xl px-6 py-16 bg-white shadow-lg rounded-lg mt-8">
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
          Yakt Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Battery Saver"
            description="Maximize battery life with the battery saver profile."
            icon="🔋"
          />
          <FeatureCard
            title="Balanced Performance"
            description="Enjoy smooth performance with a balanced approach."
            icon="⚖️"
          />
          <FeatureCard
            title="Gaming Mode"
            description="Boost your gaming experience with optimized performance."
            icon="🎮"
          />
        </div>
      </section>

      {/* Benchmarks Section */}
      <section
        ref={benchmarksRef}
        id="benchmarks"
        className="w-full max-w-5xl px-6 py-16 bg-white shadow-lg rounded-lg mt-8 mb-9"
      >
        <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">
          Yakt Benchmark
        </h2>
        <div className="overflow-x-auto rounded-lg">
          <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-blue-400 text-white">
                <th className="px-4 py-2 border">Benchmark</th>
                <th className="px-4 py-2 border">Stock</th>
                <th className="px-4 py-2 border">YAKT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-100">
                <td className="px-4 py-2 border text-center">Hackbench (Lower is better)</td>
                <td className="px-4 py-2 border text-center">6.632</td>
                <td className="px-4 py-2 border text-center">2.205</td>
              </tr>
              <tr className="bg-white">
                <td className="px-4 py-2 border text-center">Callbench (Lower is better)</td>
                <td className="px-4 py-2 border text-center">
                  syscall: 138 ns <br />
                  libc: 43 ns <br />
                  mmap: 11220 ns <br />
                  read: 5290 ns
                </td>
                <td className="px-4 py-2 border text-center">
                  syscall: 138 ns <br />
                  libc: 43 ns <br />
                  mmap: 11212 ns <br />
                  read: 4598 ns
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

// FeatureCard Component
function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-200 cursor-pointer">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
