export default function Terminal() {
    return (
      <section className="py-20 px-4 bg-slate-900">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-700">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="p-6">
                <pre className="text-slate-300 font-mono">
                  <code>{`$ npm install @company/cli
  Installing dependencies...
  Success! Ready to ship 🚀`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  