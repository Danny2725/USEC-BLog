// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Carousel } from 'antd';
import slide1 from '../../assets/LogoCLB/slide1.jpg';
import slide2 from '../../assets/LogoCLB/slide2.jpg';
import slide3 from '../../assets/LogoCLB/slide3.jpg';
import slide4 from '../../assets/LogoCLB/slide4.jpg';

export const Banner = () => {
  const imageUrls = [slide1, slide2, slide3, slide4];

  return (
    <div className=" w-4/5 mx-auto" style={{ marginTop: '3rem', marginBottom: '3rem' }}>
      <Carousel autoplay autoplaySpeed={3000} className="w-full h-1/2">
        {imageUrls.map((url, index) => (
          <div key={index} className="w-full" style={{ height: '60vh' }}>
            <img src={url} alt={`Slide ${index + 1}`} className="w-full object-cover" style={{ height: '60vh', borderRadius: '15px' }} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
