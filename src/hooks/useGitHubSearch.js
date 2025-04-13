import axios from "axios";
import { useState } from "react";

const useGitHubSearch = () => {
  const [userData, setUserData] = useState(null); // use null instead of []
  const [repoData, setRepoData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchGitHubUser = async (username) => {
    const cleanInput = username.trim().replace(/\s/g, "");
    if (!cleanInput) return;

    const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
    const headers = { Authorization: `token ${GITHUB_TOKEN}` };

    setLoading(true);
    setError(null);
    setUserData(null);
    setRepoData([]);

    try {
      const userRes = await axios.get(
        `https://api.github.com/users/${cleanInput}`,
        { headers }
      );
      const repoRes = await axios.get(
        `https://api.github.com/users/${cleanInput}/repos`,
        { headers }
      );

      setUserData(userRes.data);
      setRepoData(repoRes.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { userData, repoData, loading, error, searchGitHubUser };
};

export default useGitHubSearch;
