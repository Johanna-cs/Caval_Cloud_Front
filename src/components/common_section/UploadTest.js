import React, { Component } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/";

class UploadTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageUrls: [],
      message: "",
    };
  }

  selectFiles = (event) => {
    let images = [];
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter((image) =>
      image.name.match(/\.(jpg|jpeg|png|gif)$/)
    );
    let message = `${images.length}  image valide selectionnée`;
    this.setState({ images, message });
  };

  uploadImages = () => {
    const uploaders = this.state.images.map((image) => {
      const data = new FormData();
      data.append("image", image, image.name);

      return axios.post(BASE_URL + "upload", data).then((response) => {
        this.setState({
          imageUrl: [response.data.imageUrls, ...this.state.imageUrls],
        });
      });
    });

    axios
      .all(uploaders)
      .then(() => {
        console.log("done");
      })
      .catch((err) => alert(err.message));
  };

  render() {
    return (
      <div>
        <br />
        <div className="col-sm-12">
          <div className="col-sm-4">
            <input
              className="form-control "
              type="file"
              onChange={this.selectFiles}
              multiple
            />
          </div>
          {this.state.message ? (
            <p className="text-info">{this.state.message}</p>
          ) : (
            ""
          )}
          <br />
          <div className="col-sm-4">
            <button
              className="btn btn-primary"
              value="Submit"
              onClick={this.uploadImages}
            >
              Valider la photo
            </button>
          </div>
        </div>
        <br />
        <br />
        <div className="row col-lg-12">
          {this.state.imageUrls.map((url, i) => (
            <div className="col-lg-2" key={i}>
              <img
                src={BASE_URL + url}
                className="Profile-photo"
                alt="not available"
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UploadTest;
