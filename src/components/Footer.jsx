import { motion } from 'framer-motion'

const Footer = () => {
  return (

    <motion.footer
      className="mt-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-800 text-center text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <p>GitHub Explorer &copy; {new Date().getFullYear()}</p>
    </motion.footer>
  )
}

export default Footer
