import { motion } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Education = () => {
  const educations = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Narula Institute of Technology',
      location: 'Kolkata, West Bengal',
      period: 'August 2022 – June 2025',
      type: 'B.Tech',
    },
    {
      degree: 'Diploma in Computer Software and Technology',
      institution: 'Sheikhpara ARM Polytechnic',
      location: 'Berhampur, West Bengal',
      period: 'August 2019 – July 2022',
      type: 'Diploma',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="space-y-8">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-effect rounded-2xl p-8 hover-lift"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
                  <FaGraduationCap className="text-white" size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cyan-500/20 text-cyan-400 mb-2">
                        {edu.type}
                      </span>
                      <h3 className="text-2xl font-bold text-cyan-400 mb-2">{edu.degree}</h3>
                      <p className="text-xl text-gray-300 font-semibold mb-2">{edu.institution}</p>
                      <div className="flex items-center space-x-2 text-gray-400 mb-2">
                        <FaMapMarkerAlt className="text-cyan-400" size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 mt-4 md:mt-0">
                      <FaCalendarAlt className="text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

