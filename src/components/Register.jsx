import { useState } from "react"
import api from "../services/api"
import { Link } from "react-router-dom"

export default function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const register = async () => {
    if (!name || !email || !password) {
      setError("All fields are required")
      return
    }

    try {
      setLoading(true)
      setError("")
      await api.post("/auth/register", { name, email, password })
      setSuccess("Registration successful! Please login.")
      setTimeout(() => (window.location = "/"), 1500)
    } catch (err) {
      setError("User already exists or invalid data")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-500 text-center mb-6">
          Start managing your health digitally
        </p>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 text-green-700 p-2 rounded mb-4 text-sm">
            {success}
          </div>
        )}

        <input
          placeholder="Full name"
          className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={e => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email address"
          className="w-full mb-3 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password (min 6 characters)"
          className="w-full mb-4 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          disabled={loading}
          className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
        >
          {loading ? "Creating account..." : "Register"}
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-green-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
