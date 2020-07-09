import React, { useState, useEffect } from "react";
import "./postRider.css";
import { Link } from "react-router-dom";
import FloatingButton from "../common/FloatingButton";


const PostRiderPresentation = (props) => {

  return (
    <div className="postRider_page">
      <div className="postRider_forms">
        <h4>Présentation:</h4>
        <h1>{props.location.profile.prenom}</h1>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Prénom"
              // onChange={(e) => props.location.test({ prenom: e.target.value })}
              value={props.location.profile.prenom}
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
              // onChange={(event) =>
              //   setProfile({ age: event.target.value })
              // }
              // value={profile.age}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Code postal"
              // onChange={(event) =>
              //   setProfile({ codeP: event.target.value })
              // }
              // value={profile.codeP}
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
              // onChange={(event) =>
              //   setProfile({ message: event.target.value })
              // }
              // value={profile.message}
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
              // onChange={(event) =>
              //   setProfile({ selfWord1: event.target.value })
              // }
              // value={profile.selfWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              // onChange={(event) =>
              //   setProfile({ selfWord2: event.target.value })
              // }
              // value={profile.selfWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              // onChange={(event) =>
              //   setProfile({ selfWord3: event.target.value })
              // }
              // value={profile.selfWord3}
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
              // onChange={(event) =>
              //   setProfile({ ridingWord1: event.target.value })
              // }
              // value={profile.ridingWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              // onChange={(event) =>
              //   setProfile({ ridingWord2: event.target.value })
              // }
              // value={profile.ridingWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              // onChange={(event) =>
              //   setProfile({ ridingWord3: event.target.value })
              // }
              // value={profile.ridingWord3}
            />
          </label>
        </form>
      </div>
      <Link to="/post-rider" style={{ textDecoration: "none" }}>
        <FloatingButton btnName={"Valider"} type="submit" />
      </Link>
    </div>
  );
};
export default PostRiderPresentation;
