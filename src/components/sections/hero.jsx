import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          From &apos;What If?&apos; to &apos;Here&apos;s How&apos;
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">
          Powered by <span className="text-cyan-500">Data & AI</span>
        </h2>
        <Button size="lg" variant="destructive" className="mb-16">
          Explore More
        </Button>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 rounded-lg bg-slate-50">
            <h3 className="text-xl font-semibold mb-4">Data & AI</h3>
            <p className="text-slate-600">
              Turn data into insights and insights into autonomous intelligence with data & AI.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-50">
            <h3 className="text-xl font-semibold mb-4">GenAI & Agentic AI</h3>
            <p className="text-slate-600">
              Move past static automation with AI that generates insights & autonomously acts.
            </p>
          </div>
          <div className="p-6 rounded-lg bg-slate-50">
            <h3 className="text-xl font-semibold mb-4">MLOps</h3>
            <p className="text-slate-600">
              Automate, monitor, and refine ML models with MLOps for continuous value delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

