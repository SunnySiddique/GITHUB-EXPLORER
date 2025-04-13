import { motion } from "framer-motion";
import { Github } from "lucide-react";
const Header = () => {
  return (
    <motion.header
      className="py-6 px-4 sm:px-6 lg:px-8 border-b bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 fixed w-full top-0 left-0 z-50  shadow-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <motion.div
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Github className="h-8 w-8 text-teal-400" />
          <h1 className="text-2xl font-bold">GitHub Explorer</h1>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-teal-400 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-400 transition-colors">
                About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
