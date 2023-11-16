
import {Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa";
// eslint-disable-next-line no-empty-pattern, react/prop-types
const BlogCards = ({blogs,currentPage,selectCategory,pageSize}) => {
  // eslint-disable-next-line react/prop-types
  const filteredBlogs = blogs.filter((blog)=> !selectCategory || blog.category === selectCategory).slice((currentPage - 1) *pageSize, currentPage *pageSize);
  console.log(filteredBlogs)
  return (
    <div className='grid  md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
      {
        filteredBlogs.map((blog) => <Link key={blog.id} className='p-5 shadow-lg rounded cursor-pointer' >
          <div>
            <img src={blog.image} alt='' className='w-full'/>
            <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
            <p className='mb-2 text-gray-800'><FaUser  className='inline-flex items-center mr-2'/>{blog.author}</p>
            <p className='text-sm text-gray-800 '>published:{blog.published_date}</p>
          </div>
        </Link>)
      }
    </div>
  )
}
export default BlogCards