import { motion } from 'framer-motion'
import { FaCode, FaMobile, FaBrain, FaRocket } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: FaMobile,
      title: 'Mobile Development',
      description: 'Native Android apps with Kotlin & Flutter for cross-platform solutions',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaCode,
      title: 'Full-Stack Development',
      description: 'Building robust backends with PHP & MySQL and modern frontends',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaBrain,
      title: 'AI & ML Projects',
      description: 'Working with NLP, machine learning, and intelligent systems',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: FaRocket,
      title: 'Innovation Focus',
      description: 'Transforming ideas into elegant digital experiences',
      gradient: 'from-violet-500 to-fuchsia-500',
    },
  ]

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative">
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
            About Me
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Who I Am</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-3xl p-10 hover-lift"
          >
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                Computer Science student with hands-on experience in mobile app development and AI-based projects. 
                Skilled in <span className="text-violet-400 font-semibold">Kotlin</span>, <span className="text-violet-400 font-semibold">Java</span>, <span className="text-violet-400 font-semibold">Flutter</span>, and <span className="text-violet-400 font-semibold">Python</span>, with strong interest in mobile and intelligent software systems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm passionate about creating innovative solutions that combine cutting-edge technology with 
                user-centered design. Whether it's building native Android apps or developing full-stack web 
                applications, I strive to deliver <span className="text-violet-400 font-semibold">high-quality, performant software</span>.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-2xl p-6 hover-lift group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-violet-400 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
