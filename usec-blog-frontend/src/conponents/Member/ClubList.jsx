// src/components/ClubList.js
import ClubMember from './ClubMember';
import ChuNhiem from '../../assets/LogoCLB/ChuNhiem.jpg'

const ClubList = () => {
  const members = [
    { name: 'Trần Quân', NamHoc: "Ban ăn hại", position: 'Chủ nhiệm CLB', image: ChuNhiem },
    { name: 'Trần Quân', NamHoc: "Ban ăn hại", position: 'Chủ nhiệm CLB', image: ChuNhiem },
    { name: 'Trần Quân', NamHoc: "Ban ăn hại", position: 'Chủ nhiệm CLB', image: ChuNhiem },
    { name: 'Trần Quân', NamHoc: "Ban ăn hại", position: 'Chủ nhiệm CLB', image: ChuNhiem },
    { name: 'Trần Quân', NamHoc: "Ban ăn hại", position: 'Chủ nhiệm CLB', image: ChuNhiem },
    { name: 'Trần Quân', NamHoc: "Ban ăn hại", position: 'Chủ nhiệm CLB', image: ChuNhiem },
    { name: 'Trần Quân', NamHoc: "Ban ăn hại", position: 'Chủ nhiệm CLB', image: ChuNhiem },


  ];
  return (
    <div className='max-w-6xl mx-auto '>
      <div className="flex mt-5 mb-5">
        <h3 className="uppercase font-bold text-2xl font-semibold px-4 text-white text" style={{ borderLeft: '4px solid #e53637' }}>THÀNH VIÊN</h3>
      </div>
      <div className="flex flex-wrap justify-center">
        {members.map((member, index) => (
          <div key={index} className="w-1/4 p-2"> {/* Đặt kích thước cột 1/5 và thêm khoảng cách padding */}
            <ClubMember {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClubList;
