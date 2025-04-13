
import { motion } from "framer-motion"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useGithub } from "../context/GithubSearchContext"
import useGitHubSearch from "../hooks/useGitHubSearch"
import ErrorMessage from "./ErrorMessage"
import Loader from "./Loader"
import RepositoryList from "./RepositoryList"
import UserProfile from "./UserProfile"

export default function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const { searchInput, setSearchInput, setLastSearchedUser } = useGithub();
  const { userData, repoData, searchGitHubUser, loading, error } = useGitHubSearch();
  const trimmedInput = searchInput.trim().toLowerCase();


  const handleClick = async () => {
    if (!trimmedInput) {
      setHasSearched(false);
      return;
    }
    const user = await searchGitHubUser(trimmedInput);
    setLastSearchedUser(user?.login);
    setHasSearched(true);
  };

  useEffect(() => {
    if (!hasSearched && setLastSearchedUser && searchGitHubUser) {
      const fetchLastUser = async () => {
        if (searchInput) {
          searchGitHubUser(searchInput);
          setHasSearched(true);
        }
      };
      fetchLastUser();
    }
  }, [setLastSearchedUser]);

  useEffect(() => {
    if (!trimmedInput) {
      setHasSearched(false);
      searchGitHubUser("")
      return;
    }
  }, [trimmedInput, searchGitHubUser])


  return (
    <>
      <motion.div
        className="max-w-3xl mx-auto mb-10 mt-14 md:mt-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">Search GitHub Users</h2>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Enter GitHub username..."
                className="w-full pl-10 py-3 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleClick();
                  }
                }}
              />

            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-500 hover:bg-teal-600 text-white py-3 px-6 rounded-md font-medium"
              onClick={handleClick}
            >
              Search
            </motion.button>
          </div>
        </motion.div>
      </motion.div>

      {loading && <Loader />}
      {hasSearched && (
        <>
          {error ? (
            <ErrorMessage title={"User Not Found"} content={`Please try a different username.
        `} />
          ) : userData ? (
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <UserProfile userData={userData} repoData={repoData} />
              <RepositoryList repoData={repoData} userData={userData} />
            </motion.div>
          ) : null}
        </>
      )}

    </>
  )
}
