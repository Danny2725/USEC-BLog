/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


export const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "url('https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/335986595_601578881534080_764226339365702998_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFM5kHDvu1KMdd0MzDXfOwcar7F9rD69E5qvsX2sPr0ThtjFrQeoq7jkIHYqWu5GpmX-L8UwU-1y6CBQvzdovnB&_nc_ohc=rurPDqIGwVAAX9XC9hw&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDGc5cmKondfrJUTtYFBVLL9bT7TgF07NN6FhTMW-DsLg&oe=655D9183')",
    "url('https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/331878953_577185754434228_7752937425461922020_n.png?stp=dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFdVM_yoE_JGdkRiwmxXZDvGEP-Gh7A1kQYQ_4aHsDWRIWepfVOCXxAJ0SvnLsNoa1fGolNzTL5Ff14S6t2l2ZR&_nc_ohc=d7sj7CD0JzMAX8Za-Yn&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBma3z2s0NV_FM-Ph5BQ8LMExgCmBEeWMGE-xEJWECyYA&oe=655D6988')",
    "url('https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/323376568_876754430190581_8079471634996438564_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=h56XYk3M05wAX85bH9c&_nc_oc=AQmTOO3PPSjhQqrq_RyyIDUwceif9rCthd5DqJLEwFAw04wt6NKPKcBm3VdvPHfmuI4&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfD-DP2uv0rcB1yH63r60iGjG4ZQazr0ZGZ-gxxXkaSwug&oe=655CD8DB')",
    "url('https://scontent.fsgn19-1.fna.fbcdn.net/v/t39.30808-6/321750225_565968568683367_7804593702213877482_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bU5hY1-8vu4AX-fH6OM&_nc_ht=scontent.fsgn19-1.fna&oh=00_AfAskpvq3hZSfdUNIbqwiYJbNbVXOznV2v1aR7NRJK5Znw&oe=655E40DB')",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="px-4 py-32 mx-auto"
      style={{
        backgroundImage: images[currentImage],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-white text-center">
        <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          Welcome to USEC
        </h1>
        <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
          Đây là câu lạc bộ thể thao điện tử Trường ĐH Khoa học tự nhiên,
          ĐHQG-HCM. Đây là câu lạc bộ thể thao điện tử Trường ĐH Khoa học tự
          nhiên, ĐHQG-HCM. Đây là câu lạc bộ thể thao điện tử Trường ĐH Khoa học
          tự nhiên, ĐHQG-HCM.
        </p>
        <div>
          <Link
            to="/blogs"
            className=" font-medium hover:text-orange-500  inline-flex items-center py-1"
          >
            Learn More
            <FaArrowRight className="mt-1 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};
