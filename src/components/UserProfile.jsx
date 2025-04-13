import { motion } from 'framer-motion';
import { Calendar, FileText, RefreshCw, Star, User, Users } from "lucide-react";
import { Link } from "react-router-dom";


const UserProfile = ({ userData, repoData }) => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, staggerChildren: 0.1 }}
      className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="relative h-32 w-32 rounded-full border-4 border-teal-500/20 overflow-hidden bg-gray-700"
          >
            <img
              src={userData.avatar_url && userData.avatar_url}
              alt={userData.name && userData.name}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <div className="text-center md:text-left flex-1">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl font-bold"
            >
              {userData.name && userData.name}
            </motion.h3>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              href={userData.url && userData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline inline-block mt-1"
            >
              @{userData.login && userData.login}
            </motion.a>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-gray-300"
            >
              {userData.bio && userData.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start"
            >
              <Link to={`/followers/${userData.login}`} className="bg-gray-700 hover:bg-gray-600 text-white py-1.5 px-3 rounded-full flex items-center gap-2">
                <Users className="h-4 w-4 text-teal-400" />
                <span className="font-semibold">{userData.followers && userData.followers}</span> followers
              </Link>

              <Link to={`/following/${userData.login}`} className="bg-gray-700 hover:bg-gray-600 text-white py-1.5 px-3 rounded-full flex items-center gap-2">
                <Users className="h-4 w-4 text-teal-400" />
                <span className="font-semibold">{userData.following && userData.following}</span> following
              </Link>

              <span className="bg-gray-700 hover:bg-gray-600 text-white py-1.5 px-3 rounded-full flex items-center gap-2">
                <Star className="h-4 w-4 text-teal-400" />
                <span className="font-semibold">{repoData && repoData.length}</span> repos
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 bg-gray-900/30 border-t border-gray-700"
      >
        <motion.div
          className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="p-2 rounded-lg bg-teal-500/20">
            <FileText className="h-5 w-5 text-teal-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Public Gists</p>
            <p className="font-semibold text-white">{userData.public_gists && userData.public_gists}</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="p-2 rounded-lg bg-teal-500/20">
            <User className="h-5 w-5 text-teal-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Type</p>
            <p className="font-semibold text-white">{userData.type && userData.type}</p>
          </div>
        </motion.div>



        <motion.div
          className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="p-2 rounded-lg bg-teal-500/20">
            <Calendar className="h-5 w-5 text-teal-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Joined</p>
            <p className="font-semibold text-white">{formatDate(userData.created_at)}</p>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="p-2 rounded-lg bg-teal-500/20">
            <RefreshCw className="h-5 w-5 text-teal-400" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Last Updated</p>
            <p className="font-semibold text-white">{formatDate(userData.updated_at)}</p>
          </div>
        </motion.div>


      </motion.div>
    </motion.div>
  )
}

export default UserProfile
