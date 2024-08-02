import '../../App.css'
import React from 'react';
import "./Signup.css"

function Signup(){
    return(
        <>
      <h1 className="Sign-up">SIGN UP</h1>
       <form>
        <label for="email">Email</label>
        <input type= "Email" placeholder="Enter your Email"/>
        <label for="Password">Password</label>
        <input type= "Password" Placeholder="Enter your password"/>
        <label for="password">Repeat Password</label>
        <input type= "Password" Placeholder="Repeat your password"/>
        <button>Signup</button>

        </form> 
        </>
    );
}
export default Signup;