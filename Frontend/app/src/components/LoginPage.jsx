import React from "react";
import './style/LoginPage.css';
import avatar from "../components/img/avatar.png";

function LoginPage() {
    return (
        <div className="login-container">
        <div className="left-side"></div>
          <div className="login-box">
    
            <div className="profile-image">
              <img src={avatar} alt="Profile" className="profile-img" />
            </div>
            <form>
              <div className="input-group">
                <label>Nom d'utilisateur</label>
                <input type="text" placeholder="Enter your username" />
              </div>
              <div className="input-group">
                <label>Mot de passe</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <div className="links">
                <a href="#">creer un compte</a>

                
                <a href="#">mot de passe oublié</a>
              </div>
            </form>
          </div>
        </div>
    );
}

export default LoginPage;