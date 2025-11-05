import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'Kotlin', 'Dart'],
    },
    {
      title: 'Mobile Development',
      skills: ['Android SDK', 'Flutter', 'Jetpack Compose', 'Room Database', 'MVVM', 'Coroutines', 'API Integration'],
    },
    {
      title: 'Backend',
      skills: ['PHP', 'MySQL', 'REST APIs'],
    },
    {
      title: 'Libraries & Tools',
      skills: ['Retrofit', 'Firebase', 'Dagger-Hilt', 'Git', 'GitHub', 'Postman', 'Jupyter Notebook'],
    },
    {
      title: 'AI/ML & NLP',
      skills: ['Scikit-learn', 'NLTK', 'spaCy', 'TF-IDF', 'Cosine Similarity'],
    },
    {
      title: 'Others',
      skills: ['JSON', 'Google Maps API', 'VS Code'],
    },
  ]

  const getSkillColor = (index) => {
    const colors = [
      'from-cyan-400 to-blue-500',
      'from-blue-500 to-purple-500',
      'from-purple-500 to-pink-500',
      'from-pink-500 to-red-500',
      'from-red-500 to-orange-500',
      'from-orange-500 to-yellow-500',
    ]
    return colors[index % colors.length]
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover-lift"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r ${getSkillColor(skillIndex)} text-white shadow-lg`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

