import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

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
    <section className="py-20 px-4 min-h-[90vh]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Digital Transformation Services:</h2>
          <h3 className="text-2xl md:text-4xl mb-4">It&apos;s the nimble who triumph, not just the big!</h3>
          <p className="text-xl text-slate-600">What&apos;s stopping you?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] bg-gray-200 flex flex-col justify-center items-center">
            <img
              src="/placeholder.svg"
              alt="Digital Transformation"
              fill
              className="object-fill"
            />
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-4">
              {challenges.map((challenge) => (
                <div key={challenge} className="p-4 bg-white rounded-lg outline outline-1 outline-blue-300 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-base text-center font-medium">{challenge}</p>
                </div>
              ))}
            </div>
            <Link href={'/contact'} className="md:w-1/2 mx-auto my-8">
              <button className="bg-[#ff3b30] text-white text-nowrap px-8 py-3 rounded-full font-medium outline outline-1 hover:bg-white hover:text-[#ff3b30] transition-colors">
                  Achieve Digital Excellence
              </button>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}

