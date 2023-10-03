'use client'

import { AnimatePresence, motion } from 'framer-motion'

function PageWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default PageWrapper
