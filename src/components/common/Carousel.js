import React, { useState } from "react";
import { storage } from "../Firebase";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const ImageCarousel = (props) => {
  // Carousel images
  const [imageCarousel, setImageCarousel] = useState({});
  const [url, setUrl] = useState("test");
  const [useUrl, setUseUrl] = useState([])

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImageCarousel(e.target.files[0]);
    }
  };

  // const urlPush = useUrl.push(url);
  const handlePush = (url) => {
    useUrl.push(url)
    console.log(useUrl);
  }

  console.log(imageCarousel);
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
          .then((url) => handlePush(url))
          // .then(handlePush(url));
      }
    );
  };
  
  return (
    <>
      <Carousel dots itemWidth={330} itemHeight={200} centered offset={-9}>
        {useUrl.map((imgUrl) => (
          <img src={imgUrl} alt="" />
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
};
export default ImageCarousel;
