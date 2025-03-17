import { Card } from "@/components/ui/card"

const stats = [
  { label: "Active Users", value: "10M+" },
  { label: "Downloads", value: "1B+" },
  { label: "Response Time", value: "<100ms" },
  { label: "Uptime", value: "99.99%" },
]

export default function Stats() {
  return (
    <section className="py-20 px-4 bg-slate-900">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-slate-800 border-slate-700 p-6 text-center">
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

