import React from "react";
import { Card, Row, Col } from 'antd'; // Thêm Row, Col từ antd
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

import LQM from '../../assets/LogoCLB/LQM.png';
import VAL from '../../assets/LogoCLB/VAL.png';
import TFT from '../../assets/LogoCLB/TFT.png';
import LOL from '../../assets/LogoCLB/LOL.png';

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:5000/blogs")
            .then(res => res.json())
            .then(data => setPopularBlogs(data.slice(0, 15)));
    }, []);

    return (
        <div>
            <div className="flex">
                <h3 className="uppercase font-bold text-2xl font-semibold px-4 text-white text" style={{ borderLeft: '4px solid #e53637' }}>GAMES</h3>
            </div>

            {/* Grid layout cho 4 hình */}
            <Row gutter={[16, 16]} style={{ marginBottom: '16px', marginTop: '3rem' }}>
                <Col span={6}>
                    <Card cover={<img alt="LQM" src={LQM} />} style={{ background: 'transparent', border: 'none' }} />
                </Col>
                <Col span={6}>
                    <Card cover={<img alt="VAL" src={VAL} />} style={{ background: 'transparent', border: 'none' }} />
                </Col>
                <Col span={6}>
                    <Card cover={<img alt="TFT" src={TFT} />} style={{ background: 'transparent', border: 'none' }} />
                </Col>
                <Col span={6}>
                    <Card cover={<img alt="LOL" src={LOL} />} style={{ background: 'transparent', border: 'none' }} />
                </Col>
            </Row>
            <h3 className="uppercase font-bold text-2xl font-semibold px-4 text-white text" style={{ borderLeft: '4px solid #e53637' }}>Latest Blogs</h3>
            <div>
                {popularBlogs.slice(0, 5).map(blog => (
                    <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                        <h4 className="font-medium mb-2">{blog.title}</h4>
                        <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1">
                            Read More <FaArrowRight className="mt-1 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>

            {/* popular blogs */}
            <div className="flex">
                <h3 className="uppercase font-bold text-2xl font-semibold px-4 mt-20 text-white" style={{ borderLeft: '4px solid #e53637' }}>popular Blogs</h3>
                {popularBlogs.slice(5, 10).map(blog => (
                    <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
                        <h4 className="font-medium mb-2">{blog.title}</h4>
                        <Link to="/" className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1">
                            Read More <FaArrowRight className="mt-1 ml-2" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SideBar;
