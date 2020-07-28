import React, { useState, useEffect } from "react";
import { storage } from "../Firebase";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const ImageCarousel = (props) => {
  // Carousel images
  const [imageCarousel, setImageCarousel] = useState({});
  const [useUrl, setUseUrl] = useState([]);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImageCarousel(e.target.files[0]);
    }
  };

  const handlePush = (url) => {
    useUrl.push(url);
  };

 useEffect(() => {
   ;
 }, []);

  const handleUpload = () => {
    const uploadTask = storage
      .ref(`images/${imageCarousel.name}`)
      .put(imageCarousel);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(imageCarousel.name)
          .getDownloadURL()
          .then((url) => handlePush(url));
      }
    );
  };
        console.log(useUrl);

  
  if (props.search) {
    return (
      <>
        <Carousel dots itemWidth={330} itemHeight={200} centered offset={-9}>
          {useUrl &&
            useUrl.map((imgUrl, index) => (
              <img key={index} src={imgUrl} alt="" />
            ))}
        </Carousel>
        <br />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload} className="upload-button">
          Valider la photo
        </button>
        <hr />
      </>
    );
  } else {
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
  }
};
export default ImageCarousel;
