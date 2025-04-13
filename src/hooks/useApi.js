import axios from "axios";
import { useEffect, useState } from "react";

const useApi = (username, text) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchFollowingData = async () => {
      setLoading(true);
      try {
        const followersRes = await axios.get(
          `https://api.github.com/users/${username}/${text}`
        );
        setData(followersRes.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (username && text) {
      fetchFollowingData();
    }
  }, [username, text]);

  return [data, loading];
};

export default useApi;
