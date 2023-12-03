/* eslint-disable react/prop-types */

const Login = ({isOpen,onClose}) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"}`}>

    <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
            {/* modal content */}
            <h2 className="text-xl font-semibold mb-4 mt-6 uppercase">Please login here!</h2>
            <form className="px-4">
                {/* email */}
                <div className="mb-5">
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" 
                        className="w-full rounded-md border border=[#e0e0e0] bg-white py-3 px-6 text-base
                        font-medium text-[#6B7280] outline-none focus:border-[#6364f1] focus:shadow-md"
                    />
                </div>
                        {/* password */}
                <div className="mb-5">
                    <input type="password" name="password" id="password" placeholder="Enter your password" 
                        className="w-full rounded-md border border=[#e0e0e0] bg-white py-3 px-6 text-base
                        font-medium text-[#6B7280] outline-none focus:border-[#6364f1] focus:shadow-md"
                    />
                </div>
                {/* btn login */}
                <div>
                    <button className="hover:shadow-md rounded-md bg-[#6a64f1] hover:bg-orange-600
                    py-3 px-8 text-base font-semibold text-white outline-none">login</button>
                </div>
            </form>

            {/* modal close btn */}
            <button onClick={onClose} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-8">
                Close
            </button>
        </div>
    </div>

    </div>
  )
}

export default Login
// import React from 'react';
// import { Modal, Form, Input, Button } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';

// const Login = ({ isOpen, onClose }) => {
//   const onFinish = (values) => {
//     console.log('Received values:', values);
//     // Add your login logic here
//   };

//   return (
//     <Modal
//       title="Login"
//       visible={isOpen}
//       onCancel={onClose}
//       footer={null}
//     >
//       <Form
//         name="loginForm"
//         initialValues={{ remember: true }}
//         onFinish={onFinish}
//       >
//         <Form.Item
//           name="username"
//           rules={[{ required: true, message: 'Please input your username!' }]}
//         >
//           <Input prefix={<UserOutlined />} placeholder="Username" />
//         </Form.Item>

//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password prefix={<LockOutlined />} placeholder="Password" />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit" className="w-full">
//             Log in
//           </Button>
//         </Form.Item>
//       </Form>
//     </Modal>
//   );
// };
// export { Login };
