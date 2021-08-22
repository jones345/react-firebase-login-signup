import React from 'react'
import homescreenstyle from './homescreenstyle.scss'
import { auth, registerWithEmailAndPassword, signInWithGoogle } from './firebase/firebaseConfig'
import  { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Switch,Link, useHistory } from "react-router-dom";
export const RegisterForm = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [user, loading, error] = useAuthState(auth);
	const history = useHistory();
	const register = () => {
		if (!name) alert("Please enter name");
		registerWithEmailAndPassword(name, email, password);
	  };
	
	  useEffect(() => {
		if (loading) return;
		if (user) history.replace("/dashboard");
	  }, [user, loading]);
	
    return (
        <div className='sign-up-htm'>
             <br></br>
            <br></br>
           <div className="group">
					<label htmlFor="user" className="label">Username</label>
					<input value={name} id="user" type="text" className="input"
					onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input  value={email} id="pass" type="email" className="input"
					onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="group">
					<label for="pass" className="label"> Password</label>
					<input value={password} id="pass" type="password" className="input" data-type="password"
					onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className="group">
					<input onClick={register} type="submit" className="button" value="Sign Up"/>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div> 
        </div>
    )
}
