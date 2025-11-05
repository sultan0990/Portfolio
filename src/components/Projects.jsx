import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { projects } from '../data/projects'

const Projects = () => {
  const getCategoryColor = (category) => {
    const colors = {
      'AI/ML': 'from-orange-500 to-red-500',
      'Mobile': 'from-blue-500 to-cyan-500',
      'Web': 'from-purple-500 to-pink-500',
      'Full-Stack': 'from-violet-500 to-fuchsia-500',
    }
    return colors[category] || 'from-violet-500 to-purple-500'
  }

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative">
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
            Portfolio
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">My Projects</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 mx-auto rounded-full mb-4" />
          <p className="text-slate-400 text-lg">Showcasing innovative solutions and creative work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="glass-card rounded-3xl overflow-hidden hover-lift group relative"
            >
              {/* Project Image */}
              <div className={`relative h-56 bg-gradient-to-br ${getCategoryColor(project.category)}/20 overflow-hidden`}>
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-7xl opacity-30 group-hover:scale-110 transition-transform">📱</div>
                  </div>
                )}
                <div className={`absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-2.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 rounded-xl text-center text-sm font-semibold transition-all flex items-center justify-center space-x-2 shadow-lg"
                      >
                        <FaGithub />
                        <span>View Code</span>
                      </a>
                    )}
                  </div>
                </div>
                <div className={`absolute top-3 left-3 px-3 py-1.5 rounded-xl bg-gradient-to-r ${getCategoryColor(project.category)} text-white text-xs font-bold shadow-lg`}>
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-violet-400 mb-3 group-hover:text-violet-300 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-5 line-clamp-3 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium glass-card text-slate-300 border-slate-700/50"
                    >
                      {tech}
                    </span>
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

export default Projects
