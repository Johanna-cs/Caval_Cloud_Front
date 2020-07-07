import React, { useState } from "react";
import "./postRider.css";
import { Link } from "react-router-dom";
import FloatingButton from "../common/FloatingButton";
import Axios from "axios";

const PostRiderPresentation = (props) => {
  // const [age, setAge] = useState("");
  // const [codeP, setCodeP] = useState("");
  // const [message, setMessage] = useState("");
  // const [selfWord1, setSelfWord1] = useState("");
  // const [selfWord2, setSelfWord2] = useState("");
  // const [selfWord3, setSelfWord3] = useState("");
  // const [ridingWord1, setRidingWord1] = useState("");
  // const [ridingWord2, setRidingWord2] = useState("");
  // const [ridingWord3, setRidingWord3] = useState("");

  const [profile, setProfile] = useState({
    prenom: "",
    age: "",
    codeP: "",
    message: "",
    selfWord1: "",
    selfWord2: "",
    selfWord3: "",
    ridingWord1: "",
    ridingWord2: "",
    ridingWord3: "",
  });

  const submit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3010/api/users", profile).catch((err) =>
      console.error(err)
    );
  };

  return (
    <div className="postRider_page">
      <div className="postRider_forms">
        <h4>Présentation:</h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Prénom"
              onChange={(event) =>
                setProfile({ ...profile, prenom: event.target.value })
              }
              value={profile.prenom}
              autoFocus
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Age"
              onChange={(event) =>
                setProfile({ ...profile, age: event.target.value })
              }
              value={profile.age}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Code postal"
              onChange={(event) =>
                setProfile({ ...profile, codeP: event.target.value })
              }
              value={profile.codeP}
            />
          </label>
        </form>
        <hr />
        <h4>Message:</h4>
        <form className="postRider_message">
          <label>
            <textarea
              className="postRider_input"
              type="text"
              placeholder="Ajoutez quelques mots"
              onChange={(event) =>
                setProfile({ ...profile, message: event.target.value })
              }
              value={profile.message}
            />
          </label>
        </form>
        <hr />
        <h4>Trois mots pour me définir:</h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Un"
              onChange={(event) =>
                setProfile({ ...profile, selfWord1: event.target.value })
              }
              value={profile.selfWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) =>
                setProfile({ ...profile, selfWord2: event.target.value })
              }
              value={profile.selfWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) =>
                setProfile({ ...profile, selfWord3: event.target.value })
              }
              value={profile.selfWord3}
            />
          </label>
        </form>
        <hr />
        <h4>Trois mots pour définir mon équitation:</h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Un"
              onChange={(event) =>
                setProfile({ ...profile, ridingWord1: event.target.value })
              }
              value={profile.ridingWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) =>
                setProfile({ ...profile, ridingWord2: event.target.value })
              }
              value={profile.ridingWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) =>
                setProfile({ ...profile, ridingWord3: event.target.value })
              }
              value={profile.ridingWord3}
            />
          </label>
        </form>
      </div>
          <Link to="/post-rider" style={{ textDecoration: "none" }}>
            <FloatingButton
              btnName={"Valider"}
              type="submit"
              onClick={(e) => submit(e)}
            />
          </Link>
    </div>
  );
};
export default PostRiderPresentation;
