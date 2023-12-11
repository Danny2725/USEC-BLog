import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { CalendarOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { format } from 'date-fns'; // Import hàm format từ date-fns

const BlogCards = ({ blogs, currentPage, selectCategory, pageSize }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredBlogs = blogs
    .filter(
      (blog) =>
        (!selectCategory || blog.category === selectCategory) &&
        (searchTerm
          ? blog.title.toLowerCase().includes(searchTerm.toLowerCase())
          : true)
    )
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div>
      <div className="flex mt-5 mb-5 justify-between px-4">
        <h3 className="uppercase font-bold text-2xl font-semibold px-4 text-white text" style={{ borderLeft: '4px solid #e53637' }}>
          BLOGS
        </h3>
        <Input
          placeholder="Tìm kiếm..."
          prefix={<SearchOutlined style={{ color: '#e53637' }} />}
          className="ml-4"
          style={{ width: 300 }}
          onChange={handleSearch}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
        {filteredBlogs.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
            <div className="rounded overflow-hidden hover-scale" style={{ background: '#181818', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <img src={blog.image} alt="" className="w-full rounded overflow-hidden" />
              <h3 className="overflow-hidden line-clamp-2 text-justify mt-4 mb-2 hover:text-red-600 cursor-pointer px-3">{blog.title}</h3>
              <span className="flex items-center justify-between px-3 mt-5 mb-5">
                <Button className="hover:bg-red-500 bg-gray-700" style={{ border: 'none', color: 'white' }}>
                  Xem thêm
                </Button>
                <p className="text-sm text-white px-3">
                <CalendarOutlined />: {format(new Date(blog.published_date), 'dd/MM/yyyy')}
                </p>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogCards;
