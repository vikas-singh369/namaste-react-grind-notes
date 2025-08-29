import { useState } from "react";

export default function LoginPage() {
  const [success, setSuccess] = useState(false);

  const handleLogin = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000); // reset after 2s
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <p className="text-center text-sm text-gray-500 mb-4">
          ⚡ This is just for simulation ⚡
        </p>

        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 rounded-xl transition"
        >
          Login
        </button>

        {success && (
          <p className="mt-4 text-green-600 text-center font-semibold">
            ✅ Login Successful!
          </p>
        )}
      </div>
    </div>
  );
}
