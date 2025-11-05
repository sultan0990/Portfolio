import { motion } from 'framer-motion'
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject') || `Project Inquiry from ${formData.get('name')}`,
      message: formData.get('message'),
      projectType: formData.get('projectType'),
    }

    // Create mailto link (works as static site)
    const subject = encodeURIComponent(data.subject)
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType || 'Not specified'}\n\nMessage:\n${data.message}`
    )
    const mailtoLink = `mailto:ssn1450@gmail.com?subject=${subject}&body=${body}`

    // Open email client
    window.location.href = mailtoLink
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-2xl p-8 max-w-2xl mx-auto"
    >
      <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Send Me a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Your Email *
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Project Type
          </label>
          <select
            name="projectType"
            className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-100 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            style={{ color: 'rgb(241, 245, 249)' }}
          >
            <option value="" style={{ backgroundColor: 'rgb(30, 41, 59)', color: 'rgb(148, 163, 184)' }}>Select a project type</option>
            <option value="Mobile App Development" style={{ backgroundColor: 'rgb(30, 41, 59)', color: 'rgb(241, 245, 249)' }}>Mobile App Development</option>
            <option value="Web Development" style={{ backgroundColor: 'rgb(30, 41, 59)', color: 'rgb(241, 245, 249)' }}>Web Development</option>
            <option value="Full-Stack Project" style={{ backgroundColor: 'rgb(30, 41, 59)', color: 'rgb(241, 245, 249)' }}>Full-Stack Project</option>
            <option value="AI/ML Project" style={{ backgroundColor: 'rgb(30, 41, 59)', color: 'rgb(241, 245, 249)' }}>AI/ML Project</option>
            <option value="Consultation" style={{ backgroundColor: 'rgb(30, 41, 59)', color: 'rgb(241, 245, 249)' }}>Consultation</option>
            <option value="Other" style={{ backgroundColor: 'rgb(30, 41, 59)', color: 'rgb(241, 245, 249)' }}>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
            placeholder="Project inquiry"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Message *
          </label>
          <textarea
            name="message"
            required
            rows="6"
            className="w-full px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-all resize-none"
            placeholder="Tell me about your project..."
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-6 py-4 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 text-white font-semibold hover:shadow-lg hover:shadow-violet-500/50 transition-all flex items-center justify-center space-x-2"
        >
          <FaPaperPlane />
          <span>Send Message</span>
        </motion.button>
      </form>
    </motion.div>
  )
}

export default ContactForm
