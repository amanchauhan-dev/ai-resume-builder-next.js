'use client'

import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="h-4 w-4 border-3 border-gray-300 border-t-primary rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
      />
    </div>
  )
}
