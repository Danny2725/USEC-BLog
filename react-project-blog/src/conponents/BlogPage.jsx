import { useEffect, useState } from "react"
import BlogCard from "./BlogCard";


export const BlogPage = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=> {
        async function fetchBlogs() { 
            let url = `http://localhost:5000/blogs`;
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlogs(data);
        }
        fetchBlogs()
    }, [])
  return (
    <div>
        {/* category section */}
        <div>Page category</div>
        {/* Blog card section */}
        <div>
            <BlogCard/>
        </div>
        {/* Pagination section */}
        <div>Pagination</div>
    </div>
  )
}
