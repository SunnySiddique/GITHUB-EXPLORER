import { motion } from "framer-motion"
import { User } from "lucide-react"
import React from 'react'
import ErrorMessage from "./ErrorMessage"

const DisplayUserData = ({ data }) => {
  return (
    <>
      {Array.isArray(data) && data.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((follower, index) => (
            <motion.div
              key={follower.id}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-teal-500/50 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -4 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 rounded-full overflow-hidden bg-gray-700">
                  <img
                    src={follower.avatar_url || "/placeholder.svg"}
                    alt={follower.login}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <a
                    href={follower.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-teal-400 hover:underline truncate block"
                  >
                    {follower.login}
                  </a>
                  <div className="flex items-center gap-1.5 text-sm text-gray-400">
                    <User className="h-3.5 w-3.5" />
                    <span>{follower.type}</span>
                  </div>
                </div>
                <motion.button
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <User className="h-4 w-4 text-teal-400" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div> : <ErrorMessage content={`This user doesn't have any followers  yet. Followers will appear here once other GitHub users start
        following this account.`} />}
    </>
  )
}

export default DisplayUserData
