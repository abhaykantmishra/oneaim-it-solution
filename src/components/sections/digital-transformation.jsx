import Image from "next/image"
import { Button } from "@/components/ui/button"

const challenges = [
  "Legacy Systems & Infrastructure",
  "Data Silos",
  "Cybersecurity Threats",
  "Operational Inefficiencies",
  "Tech Debt",
  "Multi-Cloud Management",
]

export default function DigitalTransformation() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Digital Transformation Services:</h2>
          <h3 className="text-2xl md:text-4xl mb-4">It&apos;s the nimble who triumph, not just the big!</h3>
          <p className="text-xl text-slate-600">What&apos;s stopping you?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] flex flex-col justify-center items-center">
            <img
              src="/vercel.svg"
              alt="Digital Transformation"
              fill
              className="object-contain"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            {challenges.map((challenge) => (
              <div key={challenge} className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <p className="text-sm font-medium">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="destructive">
            Achieve Digital Excellence
          </Button>
        </div>
      </div>
    </section>
  )
}

