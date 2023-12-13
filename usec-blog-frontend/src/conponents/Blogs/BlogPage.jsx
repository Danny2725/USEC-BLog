import { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";

import ClubList from "./games";
export const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectCategory, setSelectCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:5000/posts?page=${currentPage}&limit=${pageSize}`;
      // filter Categories
      if (selectCategory) {
        url += `$category=${selectCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectCategory]);
  //page changing btn
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="font-white">
        <div className="flex">
          <h3
            className="uppercase font-bold text-2xl font-semibold px-4 text-white text"
            style={{ borderLeft: "4px solid #e53637" }}
          >
            GAMES
          </h3>
        </div>
        <ClubList />
      </div>
      <div className="flex flex-col lg:flex-row gap-12 text-white">
        <BlogCards
          blogs={blogs}
          currentPage={currentPage}
          selectCategory={selectCategory}
          pageSize={pageSize}
        />
      </div>
      {/* Pagination section */}
      <div>
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          blogs={blogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};
