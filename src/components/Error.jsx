import { Link } from "react-router-dom"

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-5">
      <div className="w-full max-w-lg rounded-2xl bg-white p-10 text-center shadow-2xl">
        <p className="text-8xl font-extrabold text-indigo-500">
          404
        </p>

        <h1 className="mt-5 text-3xl font-bold text-gray-800">
          Page Not Found
        </h1>

        <p className="mt-3 mb-8 text-gray-500">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block rounded-lg bg-indigo-500 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-600 hover:shadow-lg"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  )
}

export default Error
