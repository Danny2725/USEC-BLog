import React from 'react';
import { Card, Avatar } from 'antd';
import bg from '../../assets/LogoCLB/slide1.jpg'
const ClubMember = ({ name, position, image, NamHoc }) => {
  return (
    <div className="p-6 mb-8 transition-transform transform-gpu hover:scale-105 cursor-pointer shadow-lg">
      <Card style={{ width: 250 }}
          cover={<img alt={`Hình ảnh của ${name}`}
            src={bg}
            style={{ width: '100%', height: '150px', objectFit: 'cover' }}
          />}
        className="border-0" // Thêm class để bỏ border

      >
        <div style={{ textAlign: 'center' }}>
          <Avatar size={120} src={image} style={{ 
            border: '5px solid white',
            borderRadius: '50%',
            marginBottom: '8px', 
            position: 'absolute',
            top: '5.5rem', 
            left: '4.2rem' }} />
        </div>
        <div className='flex flex-col items-center'>
          <Card.Meta title={name} style={{ marginTop: '3rem' }} />
          <p style={{ marginTop: '8px' }}>Chức vụ: {position}</p>
          <p style={{ marginTop: '8px' }}>Nam Hoc: {NamHoc}</p>
        </div>
      </Card>
    </div>
  );
};
export default ClubMember;
