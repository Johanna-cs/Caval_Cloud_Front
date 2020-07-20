// import React, { useState } from "react";
// import { storage } from "../Firebase";

// const UploadTest = (props) => {
//   const [image, setImage] = useState(null);
//   const [url, setUrl] = useState("");

//   const handleChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };
//   console.log(image);
//   const handleUpload = () => {
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       (snapshot) => {},
//       (error) => {
//         console.log(error);
//       },
//       () => {
//         storage
//           .ref("images")
//           .child(image.name)
//           .getDownloadURL()
//           .then((url) => setUrl(url));
//       }
//     );
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleChange} />
//       <button onClick={handleUpload}>Upload</button>
//       <img
//         src={url}
//         className="Profile-photo"
//         alt="Vous n'avez pas encore de photo"
//       />
//     </div>
//   );
// };

// export default UploadTest;
