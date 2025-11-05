import { motion } from 'framer-motion'
import { FaMobile, FaCode, FaBrain, FaServer, FaPalette, FaRocket } from 'react-icons/fa'

const Services = () => {
  const services = [
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native Android apps with Kotlin, Flutter cross-platform solutions, and modern UI/UX design',
      features: ['Android SDK', 'Flutter', 'Jetpack Compose', 'Material Design'],
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and responsive design',
      features: ['Frontend Development', 'Backend APIs', 'Database Design', 'Responsive UI'],
      color: 'from-purple-400 to-pink-500',
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Robust server-side solutions with PHP, MySQL, and RESTful API design',
      features: ['PHP & MySQL', 'REST APIs', 'Database Management', 'API Integration'],
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: FaBrain,
      title: 'AI/ML Solutions',
      description: 'Intelligent systems using Python, NLP, and machine learning algorithms',
      features: ['NLP Projects', 'ML Models', 'Data Analysis', 'AI Integration'],
      color: 'from-orange-400 to-red-500',
    },
    {
      icon: FaPalette,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces that enhance user experience',
      features: ['UI Design', 'UX Research', 'Prototyping', 'Design Systems'],
      color: 'from-pink-400 to-purple-500',
    },
    {
      icon: FaRocket,
      title: 'Project Consultation',
      description: 'Expert advice on technology stack, architecture, and project planning',
      features: ['Tech Consultation', 'Architecture Design', 'Code Review', 'Best Practices'],
      color: 'from-cyan-400 to-blue-500',
    },
  ]

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative">
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
            Services
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">What I Offer</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 mx-auto rounded-full mb-6" />
          <p className="text-slate-400 text-lg max-w-3xl mx-auto mb-8">
            I'm available for freelance projects, contract work, and full-time opportunities. 
            Let's build something amazing together!
          </p>
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
          >
            Get in Touch for Your Project
          </motion.a>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="glass-card rounded-3xl p-8 hover-lift relative overflow-hidden group"
            >
              <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
              <div className="relative z-10">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-violet-400 mb-4 group-hover:text-violet-300 transition-colors">{service.title}</h3>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + idx * 0.05 }}
                      className="flex items-center space-x-3 text-sm text-slate-300"
                    >
                      <span className="text-violet-400 font-bold">✓</span>
                      <span>{feature}</span>
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

export default Services

