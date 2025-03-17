import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const services = ["Gen AI", "DevOps", "CloudOps", "Data Engineering", "Product Lifecycle", "Enterprise App"]

export default function Services() {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Crafted by Talent, Perfected in Services</h2>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => (
            <Badge key={service} variant="secondary" className="text-sm px-4 py-2 rounded-full">
              {service}
            </Badge>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Transforming Experience, Knowledge, and Operations</h3>
          <p className="text-slate-600 mb-8">
            Transform your software solutions with our advanced generative AI development services, designed to address
            critical use cases including Customer Experience Offerings, Enterprise Knowledge Management, and Process
            Optimization.
          </p>
          <Button variant="destructive">Know More</Button>
        </div>
      </div>
    </section>
  )
}

