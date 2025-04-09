import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

const footerLinks = {
  Services: ["Cloud Services", "Development Services", "Ai-Ml Services", "Digital Marketing"],
  Industries: ["Automobile", "E-Commerce", "Telecommunication", "Education", "Healthcare", "Government & Defense", "Finance & Banking" ],
  Company: ["About", "FAQ", "Blog", "Contact"],
  Legal: ["Privacy", "Terms"],
}

export default function Footer() {

  return (
    <footer className="bg-slate-900 py-20 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div>
            <Link href="/" className="text-white font-bold text-xl mb-6 block">
              OneAim
            </Link>
            <div className="flex gap-4 text-slate-400">
              <Link href="#" className="hover:text-white">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase().replace(" ", "-").replace(" ","-")}`} className="text-slate-400 hover:text-white">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400">
          <p>&copy; 2025 OneAim. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}