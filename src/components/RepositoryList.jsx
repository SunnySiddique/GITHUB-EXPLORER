
import { motion } from "framer-motion"
import { ExternalLink, Eye, GitFork, Star } from "lucide-react"


const RepositoryList = ({ repoData }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }}>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-2xl font-bold mb-6 flex items-center"
      >
        Repositories
        <span className="ml-3 text-sm bg-gray-700 text-white px-2 py-0.5 rounded">{repoData && repoData.length}</span>
      </motion.h2>

      <div className="grid gap-4">
        {repoData.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ y: -4 }}
            className="bg-gray-800/50 border border-gray-700 rounded-lg p-5 hover:border-teal-500/50 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <a
                  href={user.html_url && user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold text-teal-400 hover:underline flex items-center gap-2"
                >
                  {user.name && user.name}
                  <ExternalLink className="h-4 w-4" />
                </a>
                <p className="mt-2 text-gray-300">{user.description && user.description}</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-3 w-3 rounded-full bg-yellow-300"></div>
                <span className="text-sm text-gray-300">{user.language && user.language}</span>
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex items-center gap-1.5 text-gray-300">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>{user.stargazers_count && user.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <GitFork className="h-4 w-4 text-teal-400" />
                <span>{user.forks_count && user.forks_count}</span>
              </div>
              <div className="flex items-center gap-1.5 text-gray-300">
                <Eye className="h-4 w-4 text-teal-400" />
                <span>{user.watchers_count && user.watchers_count}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default RepositoryList
