import { motion } from 'framer-motion'
import { FaTrophy, FaAward, FaUserTie } from 'react-icons/fa'

const Achievements = () => {
  const achievements = [
    {
      icon: FaAward,
      title: 'Android Basics with Compose',
      description: 'Completed the Android Basics with Compose course (+120 hours)',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: FaUserTie,
      title: 'President - Student Welfare Committee',
      description: 'Served as the President (2021-2022) of the Student Welfare Committee, organizing college events, including blood donation drives',
      color: 'from-cyan-400 to-blue-500',
    },
  ]

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="glass-effect rounded-2xl p-8 hover-lift relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-3xl`} />
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-6`}>
                  <achievement.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">{achievement.title}</h3>
                <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements

