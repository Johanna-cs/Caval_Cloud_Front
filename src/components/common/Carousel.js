import React, { useState, useEffect } from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Axios from "axios";

const ImageCarousel = (props) => {
  const [useUrl, setUseUrl] = useState([]);

  const getAnnonceImages = () => {
    Axios.get(`http://localhost:4000/api/users/`)
      .then((res) => setUseUrl(res.data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    getAnnonceImages();
  }, []);

  return (
    <>
      <Carousel dots itemWidth={330} itemHeight={200} centered offset={-9}>
        {useUrl &&
          useUrl.map((imgUrl, index) => (
            <img key={index} src={imgUrl} alt="" />
          ))}
      </Carousel>
      <br />
      <hr />
    </>
  );
};
export default ImageCarousel;
