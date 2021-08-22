import React from 'react'
import homescreenstyle from './homescreenstyle.scss'
import { BrowserRouter as Router, Route, Switch,Link, useHistory } from "react-router-dom";
import { PasswordReset } from './PasswordReset';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from './firebase/firebaseConfig'
import  { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
export const LoginForm = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [user, loading, error] = useAuthState(auth);
   const history = useHistory();
	useEffect(() => {
		if (loading) {
			// maybe trigger a loading screen
			return;
		}
		if (user) history.replace("/dashboard");
	}, [user, loading]);
	return (
	
        <div className="sign-in-htm">
			 <br></br>
            <br></br>
            <div className="group">
                        <label htmlFor="user" className="label">Email</label>
                        <input value={email} id="user" type="email" className="input"
						onChange={(e) => setEmail(e.target.value)}
						/>
            </div>
            <div className="group">
					<label htmlFor="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					/>
			</div>
			<div className="group">
					<input id="check" type="checkbox" className="check" checked/>
					<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
			</div>
			<div className="group">
					<input  onClick={() => signInWithEmailAndPassword(email, password)} type="submit" className="button" value="Sign In"/>
			</div>
			<div className="hr"></div>
			<div className="foot-lnk">
					<Link to="/Reset">Forgot Password?</Link>
			</div>
        </div>
   
	)
	
}


