'use client'

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Cookies from 'js-cookie' 

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const handlerSubmmit= async (e: FormEvent)=>{
    e.preventDefault()
    e.stopPropagation()

    setLoading(true)
    setError(null)
    
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      if (!res.ok) {
        throw new Error('Login failed')
      }

      const data = await res.json()
      console.log('✅ Login success:', data)
      const token = data.data
      console.log("xxxxxxx:",token)
      Cookies.set('jwt_token', token, { expires: 7, path: '/' }) 
      // 这里可以根据需要跳转
      router.push('/projects')

    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }

  }

  return (
    <main className="flex bg-custom-login min-h-screen justify-center items-center">
      <div className="bg-white/50 backdrop-blur-xl border border-white/30 shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h1>
        
        <form className="flex flex-col gap-4" onSubmit={handlerSubmmit}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              placeholder="Enter your username"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            { loading ? 'Signing...' : 'Sign in'}
          </button>
        </form>
      </div>
    </main>
  );
}

