// import React, { useState } from 'react';
import { Menu, Button, Modal, Form, Input, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import {
    FacebookOutlined,
    InstagramOutlined,
    GithubOutlined,
    BarsOutlined,
    CloseOutlined,
    LockOutlined,
    UserOutlined,
    GoogleOutlined,
} from '@ant-design/icons';
// import 'antd/dist/antd.css';
import logo2 from '../../assets/LogoCLB/logo2.png';
import { useState } from 'react';

// const { SubMenu } = Menu;
export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenSignUp, setIsModalOpenSignUp] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: '/', link: 'Home' },
        { path: '/Member', link: 'Member' },
        { path: '/about', link: 'About' },
        { path: '/blogs', link: 'Sự kiện' },
        { path: '/GiaiDau', link: 'Giải đấu' },
        { path: '/contact', link: 'Contact' },
    ];

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModalSignUp = () => {
        setIsModalOpenSignUp(true);
    };

    const closeModalSignUp = () => {
        setIsModalOpenSignUp(false);
    };

    const onFinishLogin = (values) => {
        console.log('Received login values:', values);
        // Add your login logic here
        closeModal(); // Close the modal after login
    };

    const onFinishSignUp = (values) => {
        console.log('Received sign-up values:', values);
        // Add your sign-up logic here
        closeModalSignUp(); // Close the modal after sign-up
    };

    return (
        <header
            className=" text-white relative top-0 left-0 right-0 text-center uppercase font-bold"
            style={{
                backgroundColor: '#030c1a',
                boxShadow: '7px 7px 10px rgb(0 0 0 / 30%)',
                borderBottom: '1px solid #ffffff1a',
                zIndex: '9'
            }}
            id="test"
        >
            <div className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center">
                    <a href="/" className="text-xl font-bold text-white">
                        <img className="logoCLB m-0 p-0" src={logo2} alt="Logo" />
                    </a>
                {/* navItems for lg devices */}
                <Menu mode="horizontal" className="md:flex gap-5 text-lg hidden bg-transparent" // Add bg-transparent class

                // style={{ backgroundColor: '#030c1a' }}
                >
                    {navItems.map(({ path, link }) => (
                        <Menu.Item key={path} className="hover:scale-110 transform transition-transform text-white" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <NavLink
                                className={`${({ isActive, isPending }) =>
                                    isActive ? 'active' : isPending ? 'pending' : ''
                                    } hover:text-red-500 focus:text-red-500`}
                                to={path}
                                style={{
                                    textDecoration: 'none',
                                    borderBottomColor: 'none',
                                    color: '#fff',
                                    transition: 'color 0.3s',
                                }}
                            >
                                {link}
                            </NavLink>
                        </Menu.Item>
                    ))}
                </Menu>

                {/* menu icons */}
                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a href="https://www.facebook.com/hcmusec" className="hover:scale-125 transform transition-transform">
                        <FacebookOutlined className="" />
                    </a>
                    <Button
                        onClick={openModal}
                        type="secondary"
                        className="hover:scale-110 transform transition-transform font-bold text-white border border-white hover:bg-white hover:text-black transition-all duration-200 ease-in"
                    >
                        LOG IN
                    </Button>
                    <Button
                        onClick={openModalSignUp}
                        type="secondary"
                        className="hover:scale-110 transform transition-transform font-bold text-white border border-white hover:bg-white hover:text-black transition-all duration-200 ease-in"
                    >
                        SIGN UP
                    </Button>
                </div>

                <LoginModal isOpen={isModalOpen} onClose={closeModal} onFinish={onFinishLogin} />
                <SignUpModal isOpenSignUp={isModalOpenSignUp} onCloseSignUp={closeModalSignUp} onFinish={onFinishSignUp} />

                {/* mobile menu btn, display mobile screen*/}
                <div className="md:hidden">
                    <Button
                        onClick={toggleMenu}
                        icon={isMenuOpen ? <CloseOutlined style={{ color: 'white' }} /> : <BarsOutlined style={{ color: 'white' }} />}
                        style={{ backgroundColor: 'transparent' }}
                    />
                </div>
            </div>

            {/* menu items only for mobile */}
            <Menu
                className={` md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? 'fixed top-0 left-0 right-0 w-full transition-all ease-out duration-150' : 'hidden'
                    }`}
                mode="vertical"
                style={{ marginTop: '7rem' }}
            >
                {navItems.map(({ path, link }) => (
                    <Menu.Item key={path} className="text-black">
                        <NavLink onClick={toggleMenu} to={path}>
                            {link}
                        </NavLink>
                    </Menu.Item>
                ))}
            </Menu>
        </header>
    );
};

const LoginModal = ({ isOpen, onClose, onFinish }) => (
    <Modal
        title="Login"
        visible={isOpen}
        onCancel={onClose}
        footer={null}
        className='text-center uppercase font-bold'

    >
        <Form
            name="loginForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            {/* Google login button */}
            <Row gutter={16} className='mt-3'>
                <Col span={12}>
                    <Button
                        type="primary"
                        className="w-full bg-red-500 hover:bg-red-600"
                    // onClick={handleGoogleLogin}
                    >
                        <GoogleOutlined style={{ fontSize: '20px', textAlign: 'center' }} /> Log In with Google
                    </Button>
                </Col>

                {/* Facebook login button */}
                <Col span={12}>
                    <Button
                        type="primary"
                        className="w-full bg-blue-500 hover:bg-blue-600"
                    // onClick={handleFacebookLogin}
                    >
                        <FacebookOutlined style={{ fontSize: '20px', textAlign: 'center' }} /> Log In with Facebook
                    </Button>
                </Col>
            </Row>
            <div className='mt-3 mb-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="LoginRegister-module_or_txt_wrap_left__23aRU"></span>
                <span className="LoginRegister-module_or_txt_wrap_center__RLtOh">Or</span>
                <span className="LoginRegister-module_or_txt_wrap_right__3wUyP"></span>
            </div>
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900"
                >
                    Log In
                </Button>
            </Form.Item>
        </Form>
    </Modal>
);

const SignUpModal = ({ isOpenSignUp, onCloseSignUp, onFinish }) => (
    <Modal
        title="Sign Up"
        visible={isOpenSignUp}
        onCancel={onCloseSignUp}
        footer={null}
        className='text-center uppercase font-bold'
    >
        <Form
            name="signUpForm"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            {/* Google signup button */}
            <Row gutter={16} className='mt-3'>
                {/* Google signup button */}
                <Col span={12}>
                    <Button
                        type="primary"
                        className="w-full bg-red-500 hover:bg-red-600"
                    // onClick={handleGoogleSignUp}
                    >
                        <GoogleOutlined style={{ fontSize: '20px', textAlign: 'center' }} /> Sign Up with Google
                    </Button>
                </Col>

                {/* Facebook signup button */}
                <Col span={12}>
                    <Button
                        type="primary"
                        className="w-full bg-blue-500 hover:bg-blue-600"
                    // onClick={handleFacebookSignUp}
                    >
                        <FacebookOutlined style={{ fontSize: '20px', textAlign: 'center' }} /> Sign Up with Facebook
                    </Button>
                </Col>
            </Row>
            <div className='mt-3 mb-3' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="LoginRegister-module_or_txt_wrap_left__23aRU"></span>
                <span className="LoginRegister-module_or_txt_wrap_center__RLtOh">Or</span>
                <span className="LoginRegister-module_or_txt_wrap_right__3wUyP"></span>
            </div>            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
            </Form.Item>

            <Form.Item
                name="confirmPassword"
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('The two passwords do not match!'));
                        },
                    }),
                ]}
            >
                <Input.Password prefix={<LockOutlined />} placeholder="Confirm Password" />
            </Form.Item>



            <Form.Item>
                <Button type="primary"
                    htmlType="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-900"
                >
                    Sign Up
                </Button>
            </Form.Item>
        </Form>
    </Modal>
);