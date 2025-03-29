import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    title: "Plan",
    description: "Define your project scope and requirements",
  },
  {
    title: "Design",
    description: "Create beautiful and functional interfaces",
  },
  {
    title: "Develop",
    description: "Build with modern tools and frameworks",
  },
  {
    title: "Deploy",
    description: "Ship to production with confidence",
  },
]

export default function Workflow() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Complete IT Tools Perfected to Succeed</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <Card className="p-6 bg-slate-800 border-slate-700">
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-5 text-slate-600 transform -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#ff3b30] text-white text-nowrap text-xl px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-transparent transition-colors">
              What is Your Engineering Problem? 
          </button>
        </div>
      </div>
    </section>
  )
}

