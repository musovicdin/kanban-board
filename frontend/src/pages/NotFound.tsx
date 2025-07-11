import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="mb-4 text-6xl font-bold">404</h1>
      <h2 className="mb-2 text-2xl font-semibold">Page Not Found</h2>
      <p className="mb-6">Sorry, the page you are looking for does not exist.</p>
      <Link
        to="/"
        className="rounded bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  )
}
