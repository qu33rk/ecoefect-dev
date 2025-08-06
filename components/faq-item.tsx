"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-medium text-gray-900"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <ChevronDown
          className={`w-5 h-5 text-green-700 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={`faq-answer-${question}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        aria-hidden={!isOpen}
      >
        <div className="mt-2 text-gray-600">{answer}</div>
      </div>
    </div>
  )
}
