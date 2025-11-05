import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 flex items-center justify-center space-x-2"
        >
          <span>Made with</span>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <FaHeart className="text-red-500" />
          </motion.span>
          <span>by <span className="gradient-text font-semibold">Sultan Salauddin</span></span>
        </motion.p>
        <p className="text-gray-500 text-sm mt-2">© {new Date().getFullYear()} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer

