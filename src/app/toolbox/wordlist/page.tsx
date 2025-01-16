"use client"

import { useState, useMemo, useEffect, SetStateAction } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TermPopup } from '../../../components/term-popup'

interface Term {
  term: string
  description: string
  category: string
}

export default function Wordlist() {
  const [terms, setTerms] = useState<Term[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null)

  useEffect(() => {
    fetch('/wordlist.json')
      .then(response => response.json())
      .then(data => setTerms(data.terms))
  }, [])

  const categories = useMemo(() => {
    return Array.from(new Set(terms.map(term => term.category)))
  }, [terms])

  const filteredTerms = useMemo(() => {
    return terms.filter(term => 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || term.category === selectedCategory)
    )
  }, [terms, searchTerm, selectedCategory])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1 
        className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Web Developer Wordlist
      </motion.h1>
      
      <motion.div 
        className="mb-8 flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Input
          type="text"
          placeholder="Search terms..."
          value={searchTerm}
          onChange={(e: { target: { value: SetStateAction<string> } }) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categories.map(category => (
              <SelectItem key={category} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      <AnimatePresence>
        <motion.div 
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredTerms.map((term, index) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card 
                className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-200"
                onClick={() => setSelectedTerm(term)}
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span className="text-xl font-semibold text-slate-800 dark:text-slate-200">{term.term}</span>
                    <Badge variant="secondary" className="ml-2">{term.category}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-3">{term.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredTerms.length === 0 && (
        <motion.p 
          className="text-center text-slate-500 dark:text-slate-400 mt-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          No terms found. Try adjusting your search or filter.
        </motion.p>
      )}

      {selectedTerm && (
        <TermPopup term={selectedTerm} onClose={() => setSelectedTerm(null)} />
      )}
    </div>
  )
}

