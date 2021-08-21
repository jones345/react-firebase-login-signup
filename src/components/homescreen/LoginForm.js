import React from 'react'
import homescreenstyle from './homescreenstyle.scss'
export const LoginForm = () => {
	return (
	
        <div className="sign-in-htm">
			 <br></br>
            <br></br>
            <div className="group">
                        <label for="user" class="label">Username</label>
                        <input id="user" type="text" className="input"/>
            </div>
            <div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password"/>
			</div>
			<div className="group">
					<input id="check" type="checkbox" className="check" checked/>
					<label for="check"><span className="icon"></span> Keep me Signed in</label>
			</div>
			<div className="group">
					<input type="submit" className="button" value="Sign In"/>
			</div>
			<div className="hr"></div>
			<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
			</div>
        </div>
   
	)
}
