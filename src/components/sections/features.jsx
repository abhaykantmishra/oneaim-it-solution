import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Shield, Cloud, Code } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "High Performance",
    description: "Lightning-fast response times and optimal resource usage",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Advanced security features to protect your data",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "Built for modern cloud infrastructure",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "Designed with developers in mind",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Features That Set Us Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-slate-800 border-slate-700">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-red-500 mb-4" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

