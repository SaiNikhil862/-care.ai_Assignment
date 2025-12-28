import { useState } from "react"
import api from "../services/api"
import { Link } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const login = async () => {
    if (!email || !password) {
      setError("Please enter email and password")
      return
    }

    try {
      setLoading(true)
      setError("")
      const res = await api.post("/auth/login", { email, password })
      localStorage.setItem("token", res.data.token)
      window.location = "/dashboard"
    } catch (err) {
      setError("Invalid email or password")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Login to access your health wallet
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
