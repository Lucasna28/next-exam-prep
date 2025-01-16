import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

interface Term {
  term: string
  description: string
  category: string
}

interface TermPopupProps {
  term: Term
  onClose: () => void
}

const categoryToRouteMapping: { [key: string]: string } = {
  'Next.js general': '/topics/next/general',
  'Next.js advanced': '/topics/next/advanced', 
  'React': '/topics/react', 
  'Typescript': '/topics/typescript', 
  'Javascript': '/topics/javascript', 
  'Styling & ui': '/topics/styling-and-ui', 
  'Performance': '/topics/performance', 
  'API & data': '/topics/api-and-data', 
  'Testing': '/topics/testing', 
  'Diverse': '/topics/diverse', 
}

export function TermPopup({ term, onClose }: TermPopupProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 300) // Wait for animation to finish
  }

  const getRouteFromCategory = (category: string) => {
    return categoryToRouteMapping[category] || `/topics/${category.toLowerCase()}`
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="w-full max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="flex justify-between items-start">
                  <span className="text-2xl font-bold text-slate-800 dark:text-slate-200">{term.term}</span>
                  <Badge variant="secondary" className="ml-2 text-lg">{term.category}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">{term.description}</p>
                <div className="flex justify-between items-center">
                  <Link href={getRouteFromCategory(term.category)}>
                    <Button variant="outline">
                      Explore {term.category}
                    </Button>
                  </Link>
                  <Button variant="ghost" onClick={handleClose}>Close</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
