import React, { useRef } from 'react'
import { auth } from './firebase';
import './SignUpScreen.css'

function SignUpScreen() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            ).then((authUser) => {
            console.log(authUser);
            alert('sucess');
            })
            .catch(error =>{
            alert(error.message);
            });
    };

    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            )  
            .then((authUser)=>{
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            }) ;    
    };
    return (
        <div className="signupScreen">
            <form >
                <h1>Sign In</h1>
                <input ref={emailRef} placeholder="Email" type="Email" />
                <input ref={passwordRef} placeholder="Password" type="Password" />
                <button 
                    onClick={signIn}
                    type="submit">Sign In</button>

                <h4>
                    <span className="signupScreen__gray">New to Netflix? </span>
                    <span 
                        onClick={register}
                        className="signup__now">Sign up now.</span>
                </h4>
            </form>
            
        </div>
    )
}

export default SignUpScreen
