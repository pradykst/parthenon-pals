import Link from "next/link";
import PrivyPlaceholder from "@/components/PrivyPlaceholder";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-10">
      <section className="text-center space-y-6 max-w-2xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Battle with your <span className="text-blue-600">Parthenon Pals</span> on Movement
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Parthenon Pals is a web-based battle game where players own unique digital pets (Pals).
          Train your Pal, increase its stats, and compete on-chain to climb the leaderboards.
        </p>
        <p className="text-lg text-gray-600">
          Crypto is used for progression and high-stakes tournaments, but the core loop is fun, accessible, and designed for everyone.
        </p>

        <div className="pt-4 flex justify-center gap-4">
          <Link href="/play" className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Jump into the prototype
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">Hackathon Tracks</h2>
          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
              <span className="block text-sm font-semibold text-blue-600 mb-1">Track 1</span>
              <span className="text-lg font-medium">Best Gaming App on Movement</span>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
              <span className="block text-sm font-semibold text-blue-600 mb-1">Track 2</span>
              <span className="text-lg font-medium">The People's Choice</span>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg">
              <span className="block text-sm font-semibold text-blue-600 mb-1">Track 3</span>
              <span className="text-lg font-medium">Best App using Privy Wallets</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <PrivyPlaceholder />
        </div>
      </section>
    </div>
  );
}
