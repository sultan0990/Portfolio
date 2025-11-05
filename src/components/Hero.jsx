import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/sultan', label: 'GitHub', color: 'hover:text-violet-400' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/sulatn-salauddin', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: FaEnvelope, href: 'mailto:ssn1450@gmail.com', label: 'Email', color: 'hover:text-pink-400' },
    { icon: FaPhone, href: 'tel:+919339150390', label: 'Phone', color: 'hover:text-cyan-400' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/4 w-72 h-72 bg-pink-500/15 rounded-full blur-3xl"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring', stiffness: 200 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-6"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full glass-card text-sm font-medium text-slate-300 border-slate-700/50"
            >
              <span className="mr-2">👋</span>
              Welcome to My Portfolio
            </motion.span>
            <motion.span
              animate={{ 
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 0px rgba(34, 197, 94, 0.5)',
                  '0 0 20px rgba(34, 197, 94, 0.5)',
                  '0 0 0px rgba(34, 197, 94, 0.5)',
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 border border-emerald-500/40 text-emerald-400 text-sm font-semibold backdrop-blur-sm shadow-lg shadow-emerald-500/20"
            >
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full mr-2.5 animate-pulse shadow-lg shadow-emerald-400/50"></span>
              Available for Work
            </motion.span>
          </motion.div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight"
        >
          <span className="block gradient-text mb-2">Sultan</span>
          <span className="block gradient-text-2">Salauddin</span>
        </motion.h1>

        <motion.div variants={itemVariants} className="mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-3xl md:text-5xl font-semibold text-slate-200 mb-6 tracking-tight"
          >
            Android & Web Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting innovative mobile apps and web solutions with modern technologies.
            <br className="hidden md:block" />
            Transforming ideas into elegant digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mb-16"
        >
          {socialLinks.map(({ icon: Icon, href, label, color }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.15, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-14 h-14 rounded-2xl glass-card flex items-center justify-center text-slate-300 ${color} transition-all duration-300 group border-slate-700/50 hover:border-violet-500/50 hover:shadow-lg hover:shadow-violet-500/20`}
              aria-label={label}
            >
              <Icon size={22} className="group-hover:scale-110 transition-transform" />
            </motion.a>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
          <motion.button
            onClick={() => {
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold text-lg shadow-2xl shadow-violet-500/30 hover:shadow-violet-500/50 transition-all duration-300 overflow-hidden shine-effect"
          >
            <span className="relative z-10 flex items-center gap-2">
              Hire Me / Let's Work Together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
          <motion.button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-4 rounded-2xl glass-card hover:border-violet-500/50 transition-all duration-300 flex items-center space-x-2 text-slate-200 font-medium border-slate-700/50"
          >
            <span>Explore My Work</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <HiArrowDown size={20} className="text-violet-400" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-violet-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
