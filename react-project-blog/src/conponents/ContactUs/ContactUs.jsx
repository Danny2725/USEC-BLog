
import { useState } from 'react';

const ContactUs = () => {
  // Các state để lưu trữ thông tin biểu mẫu và trạng thái gửi
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Hàm kiểm tra định dạng email
  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Vui lòng nhập địa chỉ email hợp lệ');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Hàm kiểm tra định dạng số điện thoại
  const validatePhone = () => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneError('Vui lòng nhập số điện thoại hợp lệ');
      return false;
    }
    setPhoneError('');
    return true;
  };

  // Hàm xử lý khi người dùng gửi biểu mẫu
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kiểm tra định dạng email và số điện thoại trước khi gửi
    if (validateEmail() && validatePhone()) {
      try {
        // Gửi dữ liệu biểu mẫu đến máy chủ
        const response = await fetch('http://localhost:4001/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email,
            phone,
            message,
          }),
        });

        // Xử lý kết quả từ máy chủ
        if (response.ok) {
          setSubmissionStatus('success');
          console.log('Biểu mẫu gửi thành công');
          setEmail('');
          setPhone('');
          setMessage('');
        } else {
          setSubmissionStatus('failure');
          console.log('Gửi biểu mẫu thất bại');
        }
      } catch (error) {
        // Xử lý lỗi nếu có
        setSubmissionStatus('failure');
        console.error('Lỗi khi gửi biểu mẫu:', error);
      }
    } else {
      // Xử lý trường hợp dữ liệu không hợp lệ
      setSubmissionStatus('failure');
      console.log('Xác nhận biểu mẫu thất bại');
    }
  };

  // Phần giao diện của thành phần ContactUs
  return (
    <section className="bg-white dark:bg-gray-900">
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Liên hệ với chúng tôi</h2>

      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Gặp vấn đề kỹ thuật? Muốn gửi phản hồi về một tính năng beta? Cần thông tin về gói dịch vụ doanh nghiệp của chúng tôi? Hãy cho chúng tôi biết.
      </p>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email của bạn</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
            className={`shadow-sm ${emailError ? 'border-red-500' : 'border-gray-300'} bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
            placeholder="name@flowbite.com"
            required
          />
          {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Số điện thoại</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
            className={`block p-3 w-full text-sm ${phoneError ? 'border-red-500' : 'border-gray-300'} text-gray-900 bg-gray-50 rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
            placeholder="Nhập số điện thoại của bạn"
            required
          />
          {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tin nhắn của bạn</label>
          <textarea
            id="message"
            rows="6"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Để lại ý kiến..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-primary-800"
        >
          Gửi tin nhắn
        </button>
      </form>
      <div className="flex items-center justify-center mb-4">
        {submissionStatus === 'success' && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded" role="alert">
            <strong className="font-bold">Biểu mẫu đã được gửi thành công!</strong>
          </div>
        )}
        {submissionStatus === 'failure' && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded" role="alert">
            <strong className="font-bold">Gửi biểu mẫu thất bại. Vui lòng thử lại.</strong>
          </div>
        )}
      </div>
    </div>
  </section>
  );
};

export default ContactUs;
