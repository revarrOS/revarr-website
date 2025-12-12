import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
  title?: string
}

export default function FAQ({ faqs, title = "Frequently Asked Questions" }: FAQProps) {
  const [expandedFaqs, setExpandedFaqs] = useState<{ [key: number]: boolean }>({})

  const toggleFaq = (index: number) => {
    setExpandedFaqs(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-slate-950 to-black border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
          <HelpCircle className="text-blue-400" size={32} />
          {title}
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/30 transition-colors"
              >
                <h3 className="text-white font-semibold text-base md:text-lg pr-4">{faq.question}</h3>
                {expandedFaqs[index] ? (
                  <ChevronUp className="text-blue-400 flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-blue-400 flex-shrink-0" size={20} />
                )}
              </button>
              {expandedFaqs[index] && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
