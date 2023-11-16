import { useEffect, useState } from "react"
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import SideBar from "./SideBar";


export const BlogPage = () => {
    const [blogs,setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const [selectCategory, setSelectCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);
    useEffect(()=> {
        async function fetchBlogs() { 
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter Categories
            if (selectCategory){
                url += `$category=${selectCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlogs(data);
        }
        fetchBlogs()
    }, [currentPage, pageSize,selectCategory])
        //page changing btn
    const handlePageChange = (pageNumber) => { 
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) => {
        setSelectCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
     }
  return (
    <div>
        {/* category section */}
        <div>
            <CategorySelection onSelecCategory={handleCategoryChange} selectCategory={selectCategory} activeCategory={activeCategory}/>
        </div>
        {/* Blog card section */}
        <div className="flex flex-col lg:flex-row gap-12">
        {/* blogcard components */}
            <BlogCards blogs={blogs} currentPage ={currentPage} selectCategory={selectCategory} pageSize={pageSize} />
            {/* sidebar components */}
            <div>
            <SideBar/>
            </div>
        </div>
        {/* Pagination section */}
        <div>
            <Pagination onPageChange = {handlePageChange} currentPage ={currentPage} blogs={blogs} pageSize={pageSize}/>
        </div>
    </div>
  )
}
