import React, { useState } from 'react';

const Pagination = ({ Data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      {/* Pagination Controls */}
      <nav className="flex justify-center mt-6">
        <ul className="flex space-x-2">
          {/* Prev Button */}
          <li>
            <button
              onClick={prePage}
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition"
            >
              Prev
            </button>
          </li>
          {/* Page Numbers */}
          {numbers.map((n, i) => (
            <li key={i}>
              <button
                onClick={() => changeCpage(n)}
                className={`px-4 py-2 rounded-md transition ${
                  currentPage === n
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                {n}
              </button>
            </li>
          ))}
          {/* Next Button */}
          <li>
            <button
              onClick={nextPage}
              className="px-4 py-2 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>

      {/* Display Records */}
   
    </>
  );
};

export default Pagination;
