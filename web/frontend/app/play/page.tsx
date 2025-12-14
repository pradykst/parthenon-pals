"use client";

import { useState } from "react";

interface Pal {
    name: string;
    guild: string;
    level: number;
    xp: number;
}

export default function PlayPage() {
    const [pal, setPal] = useState<Pal>({
        name: "Test Pal",
        guild: "Storm Guild",
        level: 1,
        xp: 0,
    });

    const trainPal = () => {
        setPal((prev) => {
            const newXp = prev.xp + 10;
            if (newXp >= 100) {
                return {
                    ...prev,
                    level: prev.level + 1,
                    xp: newXp - 100,
                };
            }
            return {
                ...prev,
                xp: newXp,
            };
        });
    };

    return (
        <div className="max-w-2xl mx-auto py-10 space-y-8">
            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-md text-sm text-center">
                <strong>Prototype Mode:</strong> This is an offline demo. Stats will live on Movement testnet in the final version.
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                        🦁
                    </div>
                    <h1 className="text-3xl font-bold">{pal.name}</h1>
                    <p className="opacity-90">{pal.guild}</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="text-gray-500 text-sm uppercase tracking-wide font-semibold">Level</div>
                            <div className="text-4xl font-bold text-gray-900">{pal.level}</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <div className="text-gray-500 text-sm uppercase tracking-wide font-semibold">XP</div>
                            <div className="text-4xl font-bold text-gray-900">{pal.xp} <span className="text-sm font-normal text-gray-400">/ 100</span></div>
                        </div>
                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                            style={{ width: `${pal.xp}%` }}
                        ></div>
                    </div>

                    <button
                        onClick={trainPal}
                        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-lg transition shadow-md hover:shadow-lg active:scale-[0.98]"
                    >
                        Train Pal (+10 XP)
                    </button>
                </div>
            </div>
        </div>
    );
}
