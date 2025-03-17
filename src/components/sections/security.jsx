import { Shield } from "lucide-react"
import Image from "next/image"

export default function Security() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Shield className="text-red-500 h-6 w-6" />
              <span className="text-slate-400">Enterprise Security</span>
            </div>
            <h2 className="text-3xl font-bold text-destructive mb-6">Industry-Leading Security Measures</h2>
            <p className="text-slate-400 mb-6">
              Protect your organization with advanced security features and compliance standards
            </p>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2">
                <Shield className="text-green-500 h-5 w-5" />
                SOC 2 Type II Certified
              </li>
              <li className="flex items-center gap-2">
                <Shield className="text-green-500 h-5 w-5" />
                GDPR Compliant
              </li>
              <li className="flex items-center gap-2">
                <Shield className="text-green-500 h-5 w-5" />
                24/7 Security Monitoring
              </li>
            </ul>
          </div>
          <div className="relative h-[400px]">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Security Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

