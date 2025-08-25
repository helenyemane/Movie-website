"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/"); 
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://i.pinimg.com/1200x/61/1c/1a/611c1ab8857a0fad163a0d9ad9e091a9.jpg')",
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
            <form
                onSubmit={handleSubmit}
                className="relative w-full max-w-md rounded bg-white p-8 shadow-md"
            >
                <h2 className="mb-6 text-center text-2xl font-bold text-yellow-500">Sign In</h2>
                <label className="mb-2 block font-semibold text-gray-600" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-4 w-full rounded border border-gray-300 px-3 py-2  focus:outline-none text-black"
                    placeholder="helen@gmail.com"
                />
                <label className="mb-2 block font-semibold text-gray-600" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-6 w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-600 focus:outline-none"
                    placeholder="Your password"
                />
                <button
                    type="submit"
                    className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
                >
                    Sign In
                </button>
            </form>
        </div>
    );
}