import React from 'react';
import './GoogleSignInButton.css';

interface GoogleSignInButtonProps {
    onClick: () => void
}

const GoogleSignInButton: React.FC<GoogleSignInButtonProps> = ({ onClick }) => {
    return (
        <button className="google-signin-button" onClick={onClick}>
            <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google logo"
                className="google-logo"
            />
            Sign in with Google
        </button>
    );
};


export default GoogleSignInButton;
