import React from "react";

const PostRider = () => {
  return (
    <div className="login_page">
      <div className="login_forms">
        <form>
          <label>
            <input
              className="login_input_text"
              type="email"
              placeholder=" Adresse mail"
              autoFocus
            />
          </label>
        </form>
        <form>
          <label>
            <input
              className="login_input_text"
              type="text"
              placeholder=" Mot de passe"
            />
          </label>
        </form>
        <p>Mot de passe oublié</p>
      </div>
      <button className="login_button">SE CONNECTER</button>
      <div>
        <p>Pas encore de compte ?</p>
          <p className="login_low_text">S'inscrire</p>
      </div>
    </div>
  );
};
export default PostRider;
