import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa'
import ContactForm from './ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'ssn1450@gmail.com',
      href: 'mailto:ssn1450@gmail.com',
      color: 'from-red-400 to-pink-500',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9339150390',
      href: 'tel:+919339150390',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sulatn-salauddin',
      href: 'https://linkedin.com/in/sulatn-salauddin',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/sultan',
      href: 'https://github.com/sultan',
      color: 'from-gray-400 to-gray-600',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((contact, index) => (
            <motion.a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 hover-lift group text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <contact.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">{contact.label}</h3>
              <p className="text-gray-400 text-sm break-all">{contact.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mt-12">
          <ContactForm />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Or reach out directly via:</p>
          <motion.a
            href="mailto:ssn1450@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold text-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
          >
            Send Email Directly
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

