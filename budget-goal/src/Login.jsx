import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig.js';
import { NavLink, useNavigate } from 'react-router-dom'
import Navbar from './components/navbar.jsx';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                navigate("/")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
        <>
        <Navbar /> 
            <main >
                <section>
                    <div>
                    <br></br> <br></br><br></br>
                        <form>
                            <div>
                                <label htmlFor="email-address" className="fs-4">
                                    Email address&nbsp; 
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="fs-4">
                                    Password&nbsp; 
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <br></br>
                            <div>
                                <button className="btn btn-primary fs-4 green-btn" onClick={onLogin}>
                                    Login
                                </button>
                            </div>
                        </form>

                        <p className="text-sm text-white text-center fs-4">
                            No account yet? {' '}
                            <NavLink to="/signup" className="white">
                                Sign up
                            </NavLink>
                        </p>
                        <br></br><br></br> <br></br>

                    </div>
                </section>
            </main>
        </>
    )
}

export default Login