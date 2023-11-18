

const AboutPage = () => {
  return (
    <div className="bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-500 p-4 text-white">
        <h1 className="text-4xl font-bold">Câu Lạc Bộ XYZ</h1>
        <p className="mt-2">Nơi hội tụ đam mê và sáng tạo!</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto my-8">

        {/* Introduction Section */}
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Giới Thiệu</h2>
          <p className="text-gray-700">Chào mừng đến với Câu Lạc Bộ XYZ - nơi tuyệt vời để gặp gỡ và chia sẻ đam mê của bạn với cộng đồng đồng điệu. Chúng tôi tự hào là nơi tập trung của những người yêu thích <span className="font-semibold">[Chủ đề chính của câu lạc bộ]</span>.</p>
        </section>

        {/* Membership Benefits */}
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Lợi Ích Thành Viên</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tham gia các sự kiện đặc sắc hàng tháng.</li>
            <li>Nâng cao kỹ năng và kiến thức của bạn qua các buổi workshop chất lượng.</li>
            <li>Kết nối với những người đồng điệu và tạo ra cơ hội mới.</li>
            <li>Ưu đãi đặc biệt cho thành viên trung thành.</li>
          </ul>
        </section>

        {/* Upcoming Events */}
        <section className="my-8">
          <h2 className="text-2xl font-bold mb-4">Sự Kiện Sắp Tới</h2>
          <p className="text-gray-700">Đừng bỏ lỡ những sự kiện thú vị sắp diễn ra. Hãy kiểm tra lịch để cập nhật thông tin chi tiết về thời gian và địa điểm!</p>
          {/* Event Cards go here */}
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2023 Câu Lạc Bộ XYZ. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default AboutPage