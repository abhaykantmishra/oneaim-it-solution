import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const industries = [
  {
    title: "Making HR less 'ugh' & more 'aha!",
    category: "HRTech",
    description:
      "HRTech faces ongoing challenges with outdated processes and inefficiencies. We tackle these issues from hi-hire-retire, delivering innovative solutions that transform HR operations and drive unmatched efficiency & experience.",
  },
  {
    title: "Turning financial blah into financial yay",
    category: "FinTech",
    description:
      "FinTech faces hurdles with security, compliance, and data management. Our software engineering solutions along with Data & AI offerings address these issues, enhancing security and efficiency to drive innovation in finance.",
  },
  {
    title: "Shifting from planet-pain to green-gain.",
    category: "CleanTech",
    description:
      "ClimateTech leads the charge in addressing climate challenges and advancing sustainability. Our product engineering practices harness cutting-edge technologies like IoT, AI, and Gen AI to drive impactful climate action at scale.",
  },
]

export default function Industries() {
  return (
    <section className="py-20 px-4 bg-slate-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Industries We Elevate With Enterprise</h2>
        <h3 className="text-2xl md:text-4xl text-center mb-12">AI Development Services</h3>
        <p className="text-xl text-center text-slate-300 mb-16">
          Because these industries still have numerous unresolved problems, affecting millions of people!
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <Card key={industry.category} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">{industry.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-slate-300">{industry.category}</span>
                  <ArrowUpRight className="h-4 w-4 text-white" />
                </div>
                <p className="text-slate-400">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

