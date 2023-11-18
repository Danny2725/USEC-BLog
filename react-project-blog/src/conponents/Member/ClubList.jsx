// src/components/ClubList.js
import ClubMember from './ClubMember';

const ClubList = () => {
  const members = [
    { name: 'Trần Quân', department : "Ban ăn hại" ,position: 'Chủ nhiệm CLB',  image: 'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/358965984_2251214828600565_5471143056547108862_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=o0CZO9ZDpgMAX82zzXq&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBUudGKopQSylzaRmR-aJGYcJK6tCY4JYRFQbuSZlOQSw&oe=655D0641' },
    { name: 'Tên Thành Viên 2', department : "Ban hoạt động là gì ?" , position: 'Chức Vụ 2', image: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/393610154_2316725435382837_3556257328938116296_n.jpg?stp=c0.131.240.240a_dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IKYS1xi85s8AX8_-8rM&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfDMhKAEiFH7EeUfs6fikwSNy70KlduVuRC-cQUC2PvsfQ&oe=655ED2D0' },
    { name: 'Tên Thành Viên 3', department : "Ban hoạt động là gì ?" , position: 'Chức Vụ 3', image: 'https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/393610154_2316725435382837_3556257328938116296_n.jpg?stp=c0.131.240.240a_dst-jpg_p240x240&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IKYS1xi85s8AX8_-8rM&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfDMhKAEiFH7EeUfs6fikwSNy70KlduVuRC-cQUC2PvsfQ&oe=655ED2D0' },
    

];
  return (
    <div className="max-w-6xl mx-auto flex flex-wrap">
      {members.map((member, index) => (
        <ClubMember key={index} {...member} />
      ))}
    </div>
  );
};

export default ClubList;
