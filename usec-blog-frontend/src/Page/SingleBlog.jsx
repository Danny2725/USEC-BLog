import { useLoaderData } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import SideBar from "../conponents/Blogs/SideBar";

const SingleBlog = () => {
    const data = useLoaderData();
    // eslint-disable-next-line no-unused-vars
    const {title, image ,category,author,published_date,reading_time,content} = data[0];
  return (
    <div>
      {/* Blog details */}
      <div className="max-w-7xl mx-auto my-12 flex  gap-12 px-3">
        <div className="lg:w-3/4 mx-auto flex-col ">
            <div>
                <img src={image} alt="" className="w-full mx-auto rounded "/>
            </div>
            <h2 className="text-3xl mt-8 font-bold mb-4 text-white cursor-pointer ">{title}</h2>
            <p className="mb-3 text-gray-600"> <FaUser className="inline-flex items-center mr-2"/> {author} | {published_date}</p>
            <p className="mb-3 text-gray-600"> <FaClock className="inline-flex items-center mr-2"/>{reading_time}</p>
            <p className="text-base text-white mb-6 text-justify">{content}</p>
            <div className="text-base text-white mb-6 text-justify">
                <p>Tuyển thủ Faker - Lee Sang-hyeok, người Hàn Quốc, đã trở thành một biểu tượng trong thế giới của tựa game Liên Minh Huyền Thoại (League of Legends). Anh được coi là một trong những người chơi giỏi nhất và nổi tiếng nhất trong lịch sử của tựa game này.</p> <br/>
                <p>Sinh ra vào ngày 7 tháng 5 năm 1996, Faker bắt đầu tham gia vào thế giới của Liên Minh Huyền Thoại từ khi còn rất trẻ. Anh đã nhanh chóng nổi tiếng với việc chơi tuyệt vời và khả năng thích nghi linh hoạt trong trò chơi. Tài năng xuất sắc của anh đã giúp anh trở thành người chơi hàng đầu trong lĩnh vực này, đồng thời đặt nền móng cho sự nghiệp vô địch của mình.</p> <br/>
                <p>Một trong những điểm đặc biệt của Faker là khả năng thích nghi và đọc hiểu trò chơi một cách nhanh chóng và chính xác. Anh không chỉ giỏi trong việc điều khiển nhân vật của mình một cách xuất sắc mà còn hiểu rõ về cách thức hoạt động của game. Cách anh đọc trận đấu và dự đoán các động tác của đối thủ đã tạo nên sự ấn tượng mạnh mẽ và giúp anh chiến thắng rất nhiều trận đấu quan trọng.</p> <br/>
                <p>Sự nổi tiếng của Faker không chỉ đến từ kỹ năng chơi game tuyệt vời mà còn từ tính cách khiêm tốn và tâm huyết với việc cống hiến cho cộng đồng game thủ. Anh luôn dành thời gian để tương tác với fan qua các sự kiện, phỏng vấn và stream trực tuyến. Điều này đã tạo nên một mối liên kết mạnh mẽ giữa anh và cộng đồng người hâm mộ.</p><br/>
            </div>
        </div>
        {/* <div className="lg:w-1/2">
            <SideBar/>
        </div> */}
      </div>
    </div>
  )
}


export default SingleBlog