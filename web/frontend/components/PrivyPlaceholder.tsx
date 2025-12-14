import React from "react";

export default function PrivyPlaceholder() {
    return (
        <div className="bg-white border md:max-w-md w-full border-gray-200 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Privy embedded wallet onboarding</h3>
            <p className="text-gray-600 mb-4">
                The final version will use Privy embedded wallets so users can log in with email or social and automatically get a Movement wallet, hiding key management.
            </p>
            <div className="bg-gray-100 rounded-md p-3 text-center text-sm text-gray-500">
                Wallet Connector Preview
            </div>
        </div>
    );
}
