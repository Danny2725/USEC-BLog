// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Card, Carousel } from 'antd';

import LQM from '../../assets/LogoCLB/LQM.png';
import VAL from '../../assets/LogoCLB/VAL.png';
import TFT from '../../assets/LogoCLB/TFT.png';
import LOL from '../../assets/LogoCLB/LOL.png';
import fo4 from '../../assets/LogoCLB/fo4.jpg';
import wildrift from '../../assets/LogoCLB/wildrift.jpg';
import LC from '../../assets/LogoCLB/LC.jpg';

const ClubList = () => {
  const clubs = [
    { logo: LQM, name: 'LIÊN QUÂN MOBILE' },
    { logo: VAL, name: 'VALORANT' },
    { logo: TFT, name: 'Teamfight Tactics' },
    { logo: LOL, name: 'league of legends' },
    { logo: fo4, name: 'FC ONLINE' },
    { logo: wildrift, name: 'Liên Minh Huyền Thoại: Tốc Chiến' },
    { logo: LC, name: 'Loạn Chiến Mobile' },
  ];

  const responsiveSettings = [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2, // Adjust this value for phone-sized screens
      },
    },
  ];

  return (
    <Carousel slidesToShow={5} autoplay={50} responsive={responsiveSettings}>
      {clubs.map((club, index) => (
        <div key={index}>
          <Card
            className="hover-scale"
            style={{ width: 250, marginTop: 16, background: 'transparent', border: 'none' }}
          >
            <img
              src={club.logo}
              alt={club.name}
              style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: '8px' }}
            />
            <div className="text-white font-bold uppercase text-center" style={{ padding: '16px' }}>
              <h3>{club.name}</h3>
            </div>
          </Card>
        </div>
      ))}
    </Carousel>
  );
};

export default ClubList;
