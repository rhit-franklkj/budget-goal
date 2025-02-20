import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';
import Navbar from './components/navbar.jsx';

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                console.log(user.uid); 

                navigate("/") 
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }

    return (
        <main >
            <Navbar /> 
            <section>
                <div>
                    <div>
                    <br></br><br></br> <br></br>
                        <form>
                            <div>
                                <label htmlFor="email-address" className="fs-4">
                                    Email address&nbsp; 
                                </label>
                                <input
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label className="fs-4" htmlFor="password">
                                    Password&nbsp; 
                                </label>
                                <input
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <br></br>
                            <button
                             className="btn btn-primary fs-4 green-btn"
                                type="submit"
                                onClick={onSubmit}
                            >
                                Sign up
                            </button>

                        </form>

                        <p className="fs-4 center">
                            Already have an account?{' '}
                            <NavLink to="/login"  className="white">
                                Sign in
                            </NavLink>
                        </p>
                    </div>
                    <br></br><br></br> <br></br>
                </div>
            </section>
        </main>
    )
}

export default Signup