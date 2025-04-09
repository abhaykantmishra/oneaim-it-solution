import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-400 to-red-600 py-20 text-white md:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <span className="text-5xl font-bold">404</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Page Not Found</h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
              The page you are looking for doesn't exist or has been moved.
            </p>

            <Link
              href="/"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-base font-medium text-[#ff3b30] shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#ff3b30]"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Suggestions Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl rounded-2xl bg-gray-50 p-8 shadow-lg md:p-12">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">You might be looking for</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <Link href="/" className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-[#ff3b30]">Home Page</h3>
                <p className="text-gray-600">Return to our main page to explore our services.</p>
              </Link>

              <Link href="/contact" className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-[#ff3b30]">Contact Us</h3>
                <p className="text-gray-600">Get in touch with our team for assistance.</p>
              </Link>

              <Link href="/cloud-services" className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-[#ff3b30]">Cloud Services</h3>
                <p className="text-gray-600">Learn about our cloud solutions and offerings.</p>
              </Link>

              <Link href="/web-services" className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <h3 className="mb-2 text-xl font-semibold text-[#ff3b30]">Web Services</h3>
                <p className="text-gray-600">Explore our web development services.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
