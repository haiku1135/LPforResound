import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Resound
          </Link>
          <div className="space-x-4">
            <Link href="#about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="#features" className="text-gray-600 hover:text-gray-800">
              Features
            </Link>
            <Link href="#cta" className="text-gray-600 hover:text-gray-800">
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

