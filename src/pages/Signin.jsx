import React, { useState } from 'react';
import { auth, provider } from '../services/firebase';
import GoogleButton from 'react-google-button';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';

const Signin = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      alert('Welcome Back');
      setemail('');
      setpassword('');
    } catch (error) {
      console.log(error);
      alert(error.message);
      setemail('');
      setpassword('');
    }
  };

  const handleGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      alert('Login successful!');
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <div className="card" style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-4">Login</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="loginEmail" className="form-label">Email Address</label>
              <input type="email" value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="loginEmail" placeholder="Enter email" />
            </div>

            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">Password</label>
              <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} className="form-control" id="loginPassword" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-danger w-100">Log In</button>
          </form>
        </div>
        <hr />
        <div className="text-center my-3">
          <GoogleButton onClick={handleGoogle} />
        </div>
      </div>
    </div>
  );
};

export default Signin;
