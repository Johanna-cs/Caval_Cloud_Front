import React, { useState, Fragment } from "react";
import Axios from "axios";

const Upload = (props, {file,setFile,fileName,setFileName,uploadedFile, setUploadedFile}) => {
  

  const onChange = (e) => {
    props.setFile(e.target.files[0]);
    props.setFileName(e.target.files[0].name);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", props.file);

    try {
      const res = await Axios.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const { fileName, filePath } = res.data;

      props.setUploadedFile(fileName, filePath);
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <input type="file" className="upload-input" onChange={onChange} />
        <input type="submit" value="Valider la photo" className="upload-button" />
      </form>
      {props.uploadedFile ? (
        <img className="Profile-photo" src={props.uploadedFile.filePath} alt="" />
      ) : null}
    </Fragment>
  );
};

export default Upload;
