import React from 'react'
import homescreenstyle from './homescreenstyle.scss'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
function HomeScreen() {
    return (
        
      <div className ='login-wrap'>
        <div className='login-html'>
            <input id="tab-1" type="radio" name="tab" class="sign-in" checked/><label for="tab-1" class="tab">Sign In</label>
            <input id="tab-2" type="radio" name="tab" class="sign-up"/><label for="tab-2" class="tab">Sign Up</label>
            <div className='login-form'>
            <br></br>
            <br></br>
                <LoginForm/>
                <RegisterForm/>
            </div>
        </div>
      </div>
     
    
    )
}

export default HomeScreen

