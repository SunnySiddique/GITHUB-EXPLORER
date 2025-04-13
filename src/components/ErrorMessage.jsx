import { motion } from 'framer-motion';
import { UserX } from 'lucide-react';
import { Link } from 'react-router-dom';

function ErrorMessage({ content, title }) {
  return (
    <motion.div
      className="bg-gray-800/50 border border-gray-700 rounded-lg p-10 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="inline-flex justify-center items-center p-6 rounded-full bg-gray-700/50 mb-6"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ duration: 1, delay: 0.5, repeat: 0 }}
      >
        <UserX className="h-12 w-12 text-teal-400" />
      </motion.div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 max-w-md mx-auto">
        {content}
      </p>
      <motion.button
        className="mt-6 px-6 py-2 bg-teal-500 hover:bg-teal-600 rounded-md font-medium transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link to={"/"}>Go Back</Link>
      </motion.button>
    </motion.div>
  )
}

export default ErrorMessage
