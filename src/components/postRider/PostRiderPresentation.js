import React, { useContext } from "react";
import "./postRider.css";
import { Link } from "react-router-dom";
import FloatingButton from "../common/FloatingButton";
import Header from "../Header_footer/Header";
import { RiderContext } from "../context/RiderContext";
import { UserContext } from '../context/UserContext'

const PostRiderPresentation = (props) => {

    // Context userProfile in order to simplify user data information management
    // const { userProfile, setUserProfile } = useContext(UserContext)
    

  const { riderProfile, setRiderProfile } = useContext(RiderContext)

  return (
    <>
    <Header className="header" title="Ma Présentation" />
    <div className="postRider_page">
      <div className="postRider_forms">
        
        <h4>Présentation: </h4>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Prénom"
              onChange={(e) => setRiderProfile({...riderProfile, rider_firstname : e.target.value })}
              value={riderProfile.rider_firstname}
              
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Age"
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_age: event.target.value })}
              value={riderProfile.rider_age}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="number"
              placeholder="Code postal"
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_postal_code: Number(event.target.value) })}
              value={riderProfile.rider_postal_code}
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
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_biography: event.target.value })}
              value={riderProfile.rider_biography}
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
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_selfWord1: event.target.value })}
              value={riderProfile.rider_selfWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_selfWord2: event.target.value })}
              value={riderProfile.rider_selfWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_selfWord3: event.target.value })}
              value={riderProfile.rider_selfWord3}
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
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_ridingWord1: event.target.value })}
              value={riderProfile.rider_ridingWord1}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Deux"
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_ridingWord2: event.target.value })}
              value={riderProfile.rider_ridingWord2}
            />
          </label>
        </form>
        <form className="postRider-form">
          <label>
            <input
              className="postRider_input"
              type="text"
              placeholder="Trois"
              onChange={(event) => setRiderProfile({ ...riderProfile, rider_ridingWord3: event.target.value })}
              value={riderProfile.rider_ridingWord3}
            />
          </label>
        </form>
      </div>
          <Link to="/post-rider" style={{ textDecoration: "none" }}>
            <FloatingButton
              btnName={"Valider"}
              type="submit"
            />
          </Link>
    </div>
    </>
  );
};
export default PostRiderPresentation;
