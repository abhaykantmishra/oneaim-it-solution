import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:min-h-screen  bg-[#1e2942]">
      <div className="container mx-auto text-center max-w-6xl">
        <h2 className="text-white my-5 text-xl">Enterprise AI Development Company</h2>
        <h1 className="text-4xl text-white md:text-6xl font-bold mb-4">
          From &apos;What If?&apos; to &apos;Here&apos;s How&apos;
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
          Powered by <span className="text-cyan-500">Data & AI</span>
        </h2>
        <div className="w-full">
              <button className="bg-[#ff3b30] text-lg text-white px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-transparent hover:text-[#ff3b30] transition-colors">
                Explore More
              </button>
        </div>

        <div className="hidden font-serif md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto bg-[#0e1421] rounded-xl mt-20">
          <div className="p-6 text-white">
            <h3 className="text-2xl  font-semibold mb-4 text-start">Data & AI</h3>
            <p className="text-start text-base">
              Turn data into insights and insights into autonomous intelligence with data & AI.
            </p>
          </div>
          <div className="p-6 text-white">
            <h3 className="text-2xl  font-semibold mb-4 text-start">GenAI & Agentic AI</h3>
            <p className="text-start text-base">
              Move past static automation with AI that generates insights & autonomously acts.
            </p>
          </div>
          <div className="p-6 text-white">
            <h3 className="text-2xl  font-semibold mb-4 text-start">MLOps</h3>
            <p className="text-start text-base">
              Automate, monitor, and refine ML models with MLOps for continuous value delivery.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

