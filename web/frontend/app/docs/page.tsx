import Image from "next/image";

export default function DocsPage() {
    return (
        <div className="max-w-3xl mx-auto py-10 space-y-12">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold text-gray-900">Architecture</h1>
                <p className="text-gray-600 text-lg">
                    Parthenon Pals is built on a robust three-layer architecture designed for scalability and user experience on the Movement Network.
                </p>
            </div>

            <div className="space-y-8">
                <div className="prose prose-blue max-w-none">
                    <ul className="space-y-4 list-disc pl-5 text-gray-700">
                        <li>
                            <strong>Player & Gameplay Layer:</strong> A responsive Next.js web application that handles the visual game loop, animations, and user interactions.
                        </li>
                        <li>
                            <strong>Onboarding Layer:</strong> Integrated <span className="font-semibold text-blue-600">Privy embedded wallets</span> allow users to sign in via email or social accounts. This creates a non-custodial wallet under the hood, removing the friction of seed phrases for new users.
                        </li>
                        <li>
                            <strong>On-Chain Layer:</strong> Specific gameplay logic—such as Pal attributes, battle outcomes, and tournament standings—is verified and stored on <span className="font-semibold text-blue-600">Movement</span> via custom Move smart contracts. This ensures true ownership of assets and transparent competitive mechanics.
                        </li>
                    </ul>
                </div>

                <figure className="border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-gray-50 p-4">
                    <div className="relative w-full aspect-[16/9] bg-white rounded-lg flex items-center justify-center">
                        {/* Using a placeholder if the image is missing, but intended to be architecture.png */}
                        <Image
                            src="/architecture.png"
                            alt="Parthenon Pals Architecture Diagram"
                            width={800}
                            height={450}
                            className="object-contain"
                        />
                    </div>
                    <figcaption className="text-center text-sm text-gray-500 mt-4">
                        Figure 1: High-level System Architecture
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}
