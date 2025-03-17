import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatWidget() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="bg-white rounded-lg shadow-lg p-4 mb-4 max-w-xs">
        <p className="text-sm">We&apos;re Online!</p>
        <p className="text-xs text-slate-500">How can we assist you?</p>
      </div>
      <Button size="lg" variant="destructive" className="rounded-full h-14 w-14">
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}

