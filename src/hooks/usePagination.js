import { useState } from "react";

const usePagination = (followersData) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(12);

  const lastPost = currentPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentUser = followersData.slice(firstPost, lastPost);

  return [
    currentUser,
    currentPage,
    setCurrentPage,
    postsPerPage,
    setPostsPerPage,
  ];
};
export default usePagination;
