import React, { useState,useEffect } from 'react';
import './ResetPasswordPage.scss';

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 2200);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleResetPassword = () => {
    // Add your reset password logic here

    // Show the alert
    setShowAlert(true);
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform password reset logic here
    if (newPassword === confirmPassword) {
      // Passwords match, continue with password reset
      console.log('Password reset successful!');
    } else {
      // Passwords don't match, display an error message or take appropriate action
      console.log('Passwords do not match. Please try again.');
    }
  };

  return (
    <div className="reset-password-page">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        {showAlert && <div className="alert">Password reset successful!</div>}
        <button type="submit" onClick={handleResetPassword}>Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
