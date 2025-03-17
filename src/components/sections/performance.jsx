export default function Performance() {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-12">Blazingly Fast Performance</h2>
          <div className="relative w-48 h-48 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-slate-700" />
            <div className="absolute inset-0 rounded-full border-4 border-red-500 border-t-transparent transform -rotate-45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-sm text-slate-400">Faster</div>
              </div>
            </div>
          </div>
          <p className="text-slate-400 max-w-xl mx-auto">
            Experience lightning-fast performance with our optimized infrastructure
          </p>
        </div>
      </section>
    )
  }
  
  