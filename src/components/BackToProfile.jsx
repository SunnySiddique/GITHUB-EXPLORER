import { motion } from "framer-motion"
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'


const BackToProfile = ({ data, text }) => {
  const title = text
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="flex items-center gap-4 mb-8 mt-16" >
      <Link to="/" >
        <motion.button
          className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Profile</span>
        </motion.button>
      </Link>
      <h2 className="text-2xl font-bold">{title}</h2>
      <span className="bg-gray-700 text-white px-2 py-0.5 rounded text-sm">{data.length}</span>
    </div>
  )
}

export default BackToProfile
