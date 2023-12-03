
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'antd';
export const Banner = () => {
  const imageUrls = [
    'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/336088143_865674714535659_6102706493793633343_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Q34WnZPGKl8AX-D4pEC&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfA-7IH3WLhy2nK4D4uBHK4yOkSGuhBXOgo46X1S2qptWQ&oe=656F3E00',
    'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/334240948_204754322206292_1895471805633165609_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=_2y81FbQMIYAX-40J_H&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfARs-w6lqj5byG3SvPF5cxYy-H9ZbG_bXQRglejX2Tc4w&oe=656EFD3F',
    'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/332872357_907661090386152_6709699642055134351_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=4uMae45ys4EAX8Tgzel&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfDUXtVWmGqQb22ZiUXdLX-UFmjp7wwzLGj7JvNiUOz02g&oe=656FA1A5',
    ];

  return (
<div className=" w-4/5 mx-auto" style={{marginTop:'3rem', marginBottom:'3rem'}}>
      <Carousel autoplay autoplaySpeed={3000} className="w-full h-1/2">
        {imageUrls.map((url, index) => (
          <div key={index} className="w-full" style={{height:'60vh'}}>
        <img src={url} alt={`Slide ${index + 1}`} className="w-full object-cover" style={{ height: '60vh', borderRadius: '15px' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

