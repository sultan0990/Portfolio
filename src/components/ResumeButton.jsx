import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const ResumeButton = () => {
  // You can add your resume PDF link here later
  const resumeLink = '#' // Replace with your resume PDF link

  const handleDownload = () => {
    if (resumeLink && resumeLink !== '#') {
      window.open(resumeLink, '_blank')
    } else {
      // Fallback: Open email with resume request
      window.location.href = 'mailto:ssn1450@gmail.com?subject=Resume Request&body=Hi, I would like to request your resume.'
    }
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/50 transition-all flex items-center space-x-2 glass-effect"
      title="Download Resume"
    >
      <FaDownload />
      <span className="hidden sm:inline">Resume</span>
    </motion.button>
  )
}

export default ResumeButton

