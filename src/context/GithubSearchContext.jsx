import { createContext, useContext, useState } from "react";

const GithubContext = createContext();

export const useGithub = () => useContext(GithubContext)

const GithubContextProvider = ({ children }) => {
  const [searchInput, setSearchInput] = useState("");
  const [lastSearchedUser, setLastSearchedUser] = useState(null);

  const value = {
    searchInput,
    setSearchInput,
    lastSearchedUser,
    setLastSearchedUser,
  };

  return <GithubContext.Provider value={value}>
    {children}
  </GithubContext.Provider>
}


export default GithubContextProvider
