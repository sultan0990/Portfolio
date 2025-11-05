import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    {
      title: 'Android Basics with Compose',
      issuer: 'Google / Android Developer',
      date: 'Completed',
      duration: '+120 hours',
      description: 'Comprehensive course covering Android development fundamentals and Jetpack Compose',
      link: '#', // Add your certificate link here
      color: 'from-green-400 to-emerald-500',
    },
    // Add more certifications here when you have them
    // {
    //   title: 'Certificate Name',
    //   issuer: 'Issuing Organization',
    //   date: 'Month Year',
    //   duration: 'Duration',
    //   description: 'Description of the certification',
    //   link: 'certificate-link',
    //   color: 'from-blue-400 to-cyan-500',
    // },
  ]

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-6 hover-lift relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-10 rounded-full blur-3xl`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center`}>
                    <FaCertificate className="text-white" size={24} />
                  </div>
                  {cert.link && cert.link !== '#' && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-purple-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-2">{cert.title}</h3>
                <p className="text-gray-300 font-medium mb-2">{cert.issuer}</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                  <span>{cert.date}</span>
                  <span>•</span>
                  <span>{cert.duration}</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <p className="text-gray-400">More certifications will be added soon...</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Certifications

