const Pagination = ({ totalPosts, postsPerPage, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    pages.push(1);

    if (currentPage > 3) pages.push("...");

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) pages.push("...");

    pages.push(totalPages);

    return pages;
  };


  const pages = getPaginationPages();

  return (
    <div className="flex justify-center mt-8 gap-2 flex-wrap">
      {/* Previous Button */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
      >
        Prev
      </button>

      {/* Page Buttons */}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && goToPage(page)}
          disabled={page === "..."}
          className={`px-3 py-1 rounded transition-colors 
            ${page === "..." ? "cursor-default bg-transparent text-white" :
              currentPage === page ? "bg-teal-500" : "bg-gray-700 hover:bg-gray-600"}`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 rounded bg-gray-700 hover:bg-gray-600 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
