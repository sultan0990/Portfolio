import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaCode, FaDatabase, FaMobile } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Mobile Application Developer',
      company: 'Yolopment IT Solution',
      period: 'July 2025 – Present',
      type: 'Full-Stack App Development (Flutter + PHP Backend)',
      icon: FaMobile,
      responsibilities: [
        'Designed and developed RoJSale marketplace application using Flutter for buyers and sellers',
        'Implemented features like product listing, advanced search, real-time chat messaging, and secure authentication',
        'Built the backend with PHP & MySQL, including an admin dashboard for managing users, listings, and analytics',
        'Followed clean architecture principles and ensured smooth cross-platform performance',
        'Developed RESTful APIs for seamless communication between mobile app and backend',
      ],
    },
  ]

  return (
    <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full glass-card text-sm font-medium text-violet-400 mb-6 border-violet-500/30"
          >
            Experience
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Work Experience</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-3xl p-10 hover-lift relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                  <div className="mb-6 md:mb-0 flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-purple-600 flex items-center justify-center shadow-lg">
                        <exp.icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-violet-400 mb-2">{exp.title}</h3>
                        <p className="text-xl text-slate-300 font-semibold mb-2">{exp.company}</p>
                        <p className="text-purple-400 font-medium">{exp.type}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-400 px-4 py-2 rounded-xl glass-card border-slate-700/50">
                    <FaCalendarAlt className="text-violet-400" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mt-8">
                  {exp.responsibilities.map((resp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + idx * 0.1 }}
                      className="flex items-start space-x-3 p-4 rounded-xl glass-card border-slate-700/30 hover:border-violet-500/30 transition-colors"
                    >
                      <span className="text-violet-400 mt-1 font-bold">▹</span>
                      <span className="text-slate-300 leading-relaxed">{resp}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
