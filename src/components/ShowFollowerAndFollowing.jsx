import { motion } from "framer-motion";
import React from 'react';
import { useParams } from 'react-router-dom';
import useApi from "../hooks/useApi";
import usePagination from "../hooks/usePagination";
import BackToProfile from "./BackToProfile";
import DisplayUserData from "./DisplayUserData";
import Loader from "./Loader";
import Pagination from "./Pagination";

const ShowFollowerAndFollowing = () => {
  const { username, text } = useParams()
  const [data, loading] = useApi(username, text) // text = following or followers
  const [currentUser, currentPage, setCurrentPage, postsPerPage] = usePagination(data);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <Loader />
    </div>
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackToProfile data={data} text={text} username={username} />
      <DisplayUserData data={currentUser} />
      <Pagination totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </motion.div>
  )
}

export default ShowFollowerAndFollowing
