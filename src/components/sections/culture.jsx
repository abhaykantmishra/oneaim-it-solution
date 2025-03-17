export default function Culture() {
    return (
      <section className="py-20 px-4 relative">
        <div
          className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center"
          style={{ opacity: 0.1 }}
        />
        <div className="container mx-auto relative">
          <h2 className="font-mono text-6xl md:text-8xl font-bold text-black text-center mb-12 tracking-tight">CULTURE</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">98%</div>
              <p className="text-slate-400">Customer Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">24/7</div>
              <p className="text-slate-400">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-500 mb-2">150+</div>
              <p className="text-slate-400">Countries Served</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  